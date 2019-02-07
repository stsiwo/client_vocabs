const uuidv4 = require('uuid/v4'); 
import { PosEnum } from '../../domains/pos';
import { IDef } from '../../domains/def';

/**
 * new word esp for add new word form when new icon is clicked 
 **/
const getNewDefForm: (id: string) => IDef = (id) => {
  const defId = uuidv4();
  return {
    id: defId,
    pos: PosEnum.NOUN,
    def: "",
    image: "",
    _wordId: id,
  }
}
export default getNewDefForm;

