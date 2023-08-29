import { AitumCC } from 'aitum.js';
import { GlobalVariable } from 'aitum.js/lib/classes.js';

type GetVariableValuesReturnType = {
  [ key: string ]: GlobalVariable;
}

export default async function getVariableValues(): Promise<GetVariableValuesReturnType> {
  const lib = AitumCC.get().getAitumJS();

  const aitumGlobalVars = await lib.aitum.getGlobalVariables();

  return aitumGlobalVars.reduce(
    (prev, curr) => {
      return {
        ...prev,
        [curr.name]: curr,
      };
    },
    {},
  );
}
