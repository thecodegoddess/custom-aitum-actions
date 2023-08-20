/* eslint-disable no-unused-expressions */
import { BooleanInput, StringInput } from 'aitum.js/lib/inputs';
import { ICCActionInputs, ICustomCode } from 'aitum.js/lib/interfaces';
import FormData from 'form-data';
import fs from 'fs';
import { readdir } from 'fs/promises';
import fetch from 'node-fetch';
import path from 'path';

const DISCORD_BOT_DEFAULT_NAME = 'Stream Clipper';
const DEFAULT_FILE_EXTENSION = '.mp4';
let DEBUG = false;

type UploadImageArgsType = {
  imageUrl: string,
  apiEndpoint: string,
  message: string,
  botName: string,
}

async function uploadImage(options: UploadImageArgsType) {
  const {
    imageUrl,
    message,
    apiEndpoint,
    botName,
  } = options;

  const payloadJson = {
    content: message,
    username: botName,
  };

  try {
    const imageStream = fs.createReadStream(imageUrl);
    const formData = new FormData();

    formData.append(
      'payload_json',
      JSON.stringify(payloadJson),
    );

    formData.append(
      'file1',
      imageStream,
    );

    DEBUG && console.log({
      payloadJson,
    });

    await fetch(
      apiEndpoint,
      {
        body: formData,
        headers: formData.getHeaders(),
        method: 'POST',
      },
    );
  } catch (err) {
    DEBUG && console.log('image upload failed', err);
  }
}

type SearchFilesOptionsType = {
  directory: string,
  extension: string,
}

async function searchFiles(options: SearchFilesOptionsType) {
  const {
    directory: directoryPath,
    extension,
  } = options;

  DEBUG && console.log('Reading directory', directoryPath);

  const files = await readdir(directoryPath);

  DEBUG && console.log({
    files,
  });

  const filterFiles = files.filter((file) => {
    return path.extname(file) === extension;
  });

  const [newestFile] = filterFiles.sort(
    (a, b) => {
      const fileA = fs.statSync(
        path.join(directoryPath, a),
      );

      const fileB = fs.statSync(
        path.join(directoryPath, b),
      );

      return fileB.mtime.getTime() - fileA.mtime.getTime();
    },
  );

  if (!newestFile) {
    DEBUG && console.log('No file was found');

    return null;
  }

  return path.join(directoryPath, newestFile);
}

/** ********* CONFIG ********** */
// The custom code action name
const name: string = 'Discord Post a Clip';

// The custom code inputs
const inputs: ICCActionInputs = {
  directoryForSavedFiles: new StringInput(
    'Backtrack saves files directory?',
    { required: true },
  ),
  discordBotUsername: new StringInput(
    `Discord Bot Username? [defaults to "${DISCORD_BOT_DEFAULT_NAME}"]`,
    { required: false },
  ),
  discordMessage: new StringInput(
    'Message?',
    { required: true },
  ),
  discordWebhookUrl: new StringInput(
    'Discord Webhook URL?',
    { required: true },
  ),
  fileExtension: new StringInput(
    `File Extension with the dot? [defaults to "${DEFAULT_FILE_EXTENSION}"]`,
    { required: false },
  ),
  // eslint-disable-next-line sort-keys
  debug: new BooleanInput(
    'Debug? [default=false]',
    { required: false },
  ),
};

type MethodArgsType = {
  debug: boolean | null;
  discordBotUsername: string | null;
  fileExtension: string | null;
  directoryForSavedFiles: string;
  discordMessage: string;
  discordWebhookUrl: string;
}

async function method(actionInputs: MethodArgsType) {
  const {
    debug,
    discordBotUsername,
    fileExtension,
    discordMessage,
    directoryForSavedFiles,
    discordWebhookUrl,
  } = actionInputs;

  DEBUG = !!debug;

  DEBUG && console.log('actionInputs', { actionInputs });

  try {
    const filePathToVid = await searchFiles({
      directory: directoryForSavedFiles,
      extension: fileExtension ?? DEFAULT_FILE_EXTENSION,
    });

    if (!filePathToVid) {
      DEBUG && console.log('No File Was Found');

      return;
    }

    await uploadImage({
      apiEndpoint: discordWebhookUrl,
      botName: discordBotUsername ?? DISCORD_BOT_DEFAULT_NAME,
      imageUrl: filePathToVid,
      message: discordMessage,
    });
  } catch (err) {
    DEBUG && console.log(err);
    throw err;
  }
}

/** ********* DON'T EDIT BELOW ********** */
export default {
  inputs,
  method,
  name,
} as ICustomCode;
