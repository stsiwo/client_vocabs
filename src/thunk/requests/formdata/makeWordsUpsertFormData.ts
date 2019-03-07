import { IWord } from '../../../domains/word';
import { IDef } from '../../../domains/def';

const makeWordsUpsertFormData: (input: IWord[]) => FormData = (input) => {
  const formData = new FormData();

  input.forEach(( word: IWord, wordIndex: number ) => {

    formData.append(`word.${ wordIndex }.id`, word.id);
    formData.append(`word.${ wordIndex }.name`, word.name);

    word.defs.forEach(( def: IDef, defIndex: number ) => {

      formData.append(`word.${ wordIndex }.defs.${ defIndex }.id`, def.id);
      formData.append(`word.${ wordIndex }.defs.${ defIndex }.def`, def.def);
      formData.append(`word.${ wordIndex }.defs.${ defIndex }.image`, def.image);
      //formData.append(`image`, def.image);
      formData.append(`word.${ wordIndex }.defs.${ defIndex }.wordId`, def.wordId);
      formData.append(`word.${ wordIndex }.defs.${ defIndex }.posId`, def.posId.toString());
    })
  })

  return formData;
}
export default makeWordsUpsertFormData;


  


