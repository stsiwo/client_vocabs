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
    posId: PosEnum.NOUN,
    def: "",
    image: "",
    wordId: id,
  }
}
export default getNewDefForm;


