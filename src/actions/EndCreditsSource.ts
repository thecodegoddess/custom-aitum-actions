import { StringInput } from 'aitum.js/lib/inputs';
import { ICCActionInputs, ICustomCode } from 'aitum.js/lib/interfaces';
import { renderFile } from 'ejs';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getVariableValues } from '../utils';

async function renderFromTemplate(credits: string[]) {
  const templatePath = path.resolve('src', 'includes', 'templates', 'end-credits.ejs');

  return renderFile(
    templatePath,
    {
      credits,
      creditsLength: credits.length,
    },
  );
}

async function writeToFile(text: string) {
  const endCreditsSourceFile = path.resolve('src', 'obs-sources', 'end-credits.html');
  await fs.writeFile(endCreditsSourceFile, text);
}

const name: string = 'End Credits Source';

const inputs: ICCActionInputs = {
  welcomeList: new StringInput(
    'Welcome List',
    {
      required: true,
    },
  ),
};

type MethodArgsType = {
  welcomeList: string
};

async function method(actionInputs: MethodArgsType) {
  console.log(actionInputs);

  const {
    welcomeList,
  } = actionInputs;

  if (!welcomeList) {
    console.log('no welcome list items');

    return;
  }

  const {
    [welcomeList]: credits,
  } = await getVariableValues();

  console.log(credits);
  //  console.log('welcomeList', actionInputs.welcomeList);

  const htmlText = await renderFromTemplate(credits.value as string[]);

  console.log({
    htmlText,
  });

  await writeToFile(htmlText);
}

export default {
  inputs,
  method,
  name,
} as ICustomCode;
