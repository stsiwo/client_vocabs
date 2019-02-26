import { getCurrentTimeStamp } from '../../util/getCurrentTimeStamp';
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
    creationDate: getCurrentTimeStamp(),
    defs: [
      {
        id: uuidv4(),
        pos: PosEnum.NOUN,
        def: "",
        image: "",
        wordId: id,
      },
    ],
  }
}
export default getNewWord;

