import { IWord } from '../../../domains/word';

const recursiveMethod = ( input: any, keyName: string, callback: (input: any, keyName: string) => void ) => {
  // call recursive if input is object except for File
  if ( typeof input === "object" && !(input instanceof File)) {
    for (var prop in input) recursiveMethod(input[prop], `${ keyName }.${ prop }`, callback)
  } else {
    callback(input, keyName);
  }
}

const makeWordsUpsertFormData: (input: IWord[]) => FormData = (input) => {
  const formData = new FormData();

  recursiveMethod(input, "word", ( cbInput, cbKeyName ) => {
    formData.append(cbKeyName, cbInput);
  });

  return formData;
}
export default makeWordsUpsertFormData;



  


