const uuidv4 = require('uuid/v4'); 
import { PosEnum } from '../../domains/pos';
import { IEntityDef } from '../../state/type';
/**
 * new word esp for add new word form when new icon is clicked 
 **/
const getNewNormalizedDef: (id: string) => IEntityDef = (id) => {
  const defId = uuidv4();
  return {
    [defId] : {
      id: defId,
      pos: PosEnum.NOUN,
      def: "",
      image: "",
      _wordId: id,
    }
  }
}
export default getNewNormalizedDef;


