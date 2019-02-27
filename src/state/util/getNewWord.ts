const uuidv4 = require('uuid/v4'); 
import { IWord } from '../../domains/word';
import { PosEnum } from '../../domains/pos';
/**
 * new word esp for add new word form when new icon is clicked 
 **/
const getNewWord: (id: string) => IWord = (id) => {
  return {
    id: id,
    name: "",
    creationDate: new Date().toISOString(),
    defs: [
      {
        id: uuidv4(),
        posId: PosEnum.NOUN,
        def: "",
        image: "",
        wordId: id,
      },
    ],
  }
}
export default getNewWord;

