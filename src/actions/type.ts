import { normalizeWordObject } from '../state';
import { IWord } from '../domains/word';
//export interface IType {
  //DOMAIN_ONE_TYPE_A: string;
  //DOMAIN_ONE_TYPE_B: string; 
  //DOMAIN_ONE_TYPE_C: string; 
  //DOMAIN_TWO_TYPE_A: string; 
  //DOMAIN_TWO_TYPE_B: string; 
  //DOMAIN_TWO_TYPE_C: string; 
//}

//const Type: IType = {
  //DOMAIN_ONE_TYPE_A: "DOMAIN_ONE_TYPE_A", 
  //DOMAIN_ONE_TYPE_B: "DOMAIN_ONE_TYPE_B", 
  //DOMAIN_ONE_TYPE_C: "DOMAIN_ONE_TYPE_C", 
  //DOMAIN_TWO_TYPE_A: "DOMAIN_TWO_TYPE_A", 
  //DOMAIN_TWO_TYPE_B: "DOMAIN_TWO_TYPE_B", 
  //DOMAIN_TWO_TYPE_C: "DOMAIN_TWO_TYPE_C", 
//}


//export default Type;
//
export interface IWordsActionType {
  ADD_NEW_WORD: string;
}

export const WordsActionType: IWordsActionType = {
  ADD_NEW_WORD: "ADD_NEW_WORD",
}

export const addNewWordAction = (input: IWord) => {
  const normalizedNewWord = normalizeWordObject(input);
  return {
    type: WordsActionType.ADD_NEW_WORD,
    entities: normalizedNewWord.entities,
  }
};
