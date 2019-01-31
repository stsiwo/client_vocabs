import { getCurrentTimeStamp } from '../../util/getCurrentTimeStamp';
const uuidv4 = require('uuid/v4'); 
import { IWord } from '../../domains/word';
import { PosEnum } from '../../domains/pos';
import { List } from 'immutable';
/**
 * new word esp for add new word form when new icon is clicked 
 **/
const getNewWord: (id: string) => IWord = (id) => {
  return {
    id: id,
    name: "",
    createDate: getCurrentTimeStamp(),
    defs: List<IDef>([
      {
        id: uuidv4(),
        pos: PosEnum.NOUN,
        def: "",
        image: "",
        _wordId: id,
      },
    ]),
  }
}
export default getNewWord;

