/* eslint-disable no-unused-expressions */

import { AitumCC } from 'aitum.js';
import { GlobalVariable } from 'aitum.js/lib/classes.js';
import { DeviceType } from 'aitum.js/lib/enums';
import { BooleanInput, StringInput } from 'aitum.js/lib/inputs';
import { ICCActionInputs, ICustomCode } from 'aitum.js/lib/interfaces';

let DEGUG = false;

type GetVariableValuesReturnType = {
  [ key: string ]: GlobalVariable;
}

function getVariableValues(vars: GlobalVariable[]): GetVariableValuesReturnType {
  return vars.reduce(
    (prev, curr) => {
      return {
        ...prev,
        [curr.name]: curr,
      };
    },
    {},
  );
}

/** ********* CONFIG ********** */
// The custom code action name
const name: string = 'Greet First Time User';

// The custom code inputs
const inputs: ICCActionInputs = {
  globalVariableNameCurrentUser: new StringInput(
    'Name of the global variable containing the name of the current user',
    { required: true },
  ),
  globalVariableNameWelcomeList: new StringInput(
    'Name of the global variable with a list of welcomed users',
    { required: true },
  ),
  welcomeMessageText: new StringInput(
    'Welcome Message?',
    { required: true },
  ),
  // eslint-disable-next-line sort-keys
  debug: new BooleanInput(
    'Debug? [default=false]',
    { required: false },
  ),
};

type MethodInputTypes = {
  debug?: boolean,
  globalVariableNameCurrentUser: string,
  globalVariableNameWelcomeList: string,
  welcomeMessageText: string,
}

// The code executed.
async function method(actionInputs: MethodInputTypes) {
  const {
    debug = false,
    globalVariableNameCurrentUser,
    globalVariableNameWelcomeList,
    welcomeMessageText,
  } = actionInputs;

  DEGUG = debug;

  const lib = AitumCC.get().getAitumJS();

  const aitumGlobalVars = await lib.aitum.getGlobalVariables();

  const {
    [globalVariableNameWelcomeList]: welcomeList,
    [globalVariableNameCurrentUser]: currentUser,
  } = getVariableValues(aitumGlobalVars);

  DEGUG && console.log(
    'Variable Names',
    {
      globalVariableNameCurrentUser,
      globalVariableNameWelcomeList,
    },
  );

  DEGUG && console.log(
    'Global Variable Retrieved Values',
    {
      currentUser: currentUser?.value,
      welcomeList: welcomeList?.value,
    },
  );

  if (!welcomeList || !currentUser) {
    DEGUG && console.log(
      '(!welcomeList || !currentUser)',
      welcomeList,
      currentUser,
    );

    throw new Error('Are the variables configured correctly?');
  }

  if (!welcomeList.value || !currentUser.value) {
    DEGUG && console.log(
      '(!welcomeList.value || !currentUser.value)',
      welcomeList.value,
      currentUser.value,
    );

    throw new Error('No Values Were Returned. Are your variables set properly');
  }

  if (!Array.isArray(welcomeList.value)) {
    DEGUG && console.log(
      '(!Array.isArray(welcomeList.value))',
      welcomeList.value,
    );

    throw new Error(`Is the ${globalVariableNameWelcomeList} set as a list?`);
  }

  const hasUserBeenWelcomed = welcomeList.value.includes(currentUser.value as string);

  if (hasUserBeenWelcomed) {
    DEGUG && console.log(`${currentUser.value} has ALREADY been welcomed`);

    return;
  }

  const newWelcomeList = [
    currentUser.value as string,
    ...welcomeList.value,
  ];

  DEGUG && console.log(
    'New Welcome List Value',
    newWelcomeList,
  );

  await welcomeList.update(newWelcomeList);

  DEGUG && console.log(welcomeMessageText);

  const twitchDevice = (
    await lib.getDevices(DeviceType.TWITCH)
  )[0];

  await twitchDevice.sendMessage(welcomeMessageText);
}

/** ********* DON'T EDIT BELOW ********** */
export default {
  inputs,
  method,
  name,
} as ICustomCode;
