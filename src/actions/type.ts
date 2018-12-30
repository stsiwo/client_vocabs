import { normalizeWordObject, normalizeDefsArray, ISortedWordList } from '../state';
import { IWord } from '../domains/word';
import { IDef } from '../domains/def';
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

export enum SORT_ORDER {
  ALPHA_ASC  = 1,
  ALPHA_DESC = 2,
  DATE_NEWER = 3,
  DATE_OLDER = 4,
}

interface ISortActionType {
  CHANGE_SORT: string,
}


//export default Type;
export interface IWordActionType {
  ADD_NEW_WORD: string;
  REMOVE_WORD: string;
  UPDATE_WORD: string;
}

export interface IDefActionType {
  ADD_NEW_DEF: string;
  REMOVE_DEF: string;
  UPDATE_DEF: string;
}

export const SortActionType: ISortActionType = {
  CHANGE_SORT: "CHANGE_SORT",
}

export const changeSortAction = (sortedWordList: ISortedWordList, nextSort: SORT_ORDER) => ({
  type: SortActionType.CHANGE_SORT,
  sortedWordList,
  currentSort: nextSort,
});



export const WordActionType: IWordActionType = {
  ADD_NEW_WORD: "ADD_NEW_WORD",
  REMOVE_WORD: "REMOVE_WORD",
  UPDATE_WORD: "UPDATE_WORD",
}

export const DefActionType: IDefActionType = {
  ADD_NEW_DEF: "ADD_NEW_DEF",
  REMOVE_DEF: "REMOVE_DEF",
  UPDATE_DEF: "UPDATE_DEF",
}

export const addNewWordAction = (input: IWord) => {
  const normalizedNewWord = normalizeWordObject(input);
  return {
    type: WordActionType.ADD_NEW_WORD,
    entities: normalizedNewWord.entities,
  }
};

export const removeWordAction = (id: number) => {
  return {
    type: WordActionType.REMOVE_WORD,
    id,
  }
};

export const updateWordAction = (updateWord: IWord) => {
  const normalizedUpdateWord = normalizeWordObject(updateWord);
  return {
    type: WordActionType.UPDATE_WORD,
    entities: normalizedUpdateWord.entities,
  }
};

export const addNewDefAction = (def: IDef[]) => {
  const normalizedNewDef = normalizeDefsArray(def);
  return {
    type: DefActionType.ADD_NEW_DEF,
    entities: normalizedNewDef.entities,
  }
};

export const removeDefAction = (id: number, _wordId: number) => {
  return {
    type: DefActionType.REMOVE_DEF,
    id,
    _wordId,
  }
};

export const updateDefAction = (updateDef: IDef[]) => {
  const normalizedUpdateDef = normalizeDefsArray(updateDef);
  return {
    type: DefActionType.UPDATE_DEF,
    entities: normalizedUpdateDef.entities,
  }
};
