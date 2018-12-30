import { SORT_ORDER } from '../enums';
import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { changeSortAction } from "../actions";
import { IWord } from "../domains/word";
import { ThunkAction } from 'redux-thunk';
//: ThunkAction<void, INormalizedState, undefined, AnyAction> 

type changeSortWrapperThunkType = (newSort: SORT_ORDER) => ThunkAction<void, INormalizedState, undefined, AnyAction>;

export const changeSortWrapperThunk: changeSortWrapperThunkType = ( newSort ) => ( dispatch, getState ) => {
  // get words state
  const wordList = Object.values(getState().entities.words);
  // sort with handler
  wordList.sort(sortHandlers[newSort]); 
  // extract only id 
  const wordIdList = wordList.map(( word ) => word.id );
  // dispatch change sort action
  dispatch(changeSortAction(wordIdList, newSort));
}

type CompareFunctionType = (a: IWord, b: IWord) => number;

//type ValueOf<T> = T[keyof T];
  
// key must be enum of SORT_ORDER to map it to compare hander function
interface ISortHandler {
  [P: number]: CompareFunctionType;
}

// might need to refactor to implement more efficient sorting algorithm (Schwartzian transform)
export const sortHandlers: ISortHandler = {
  [SORT_ORDER.ALPHA_ASC]: (first_word, second_word) => {
    const nameA = first_word.name.toUpperCase(); // ignore upper and lowercase
    const nameB = second_word.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  },
  [SORT_ORDER.ALPHA_DESC]: (first_word, second_word) => {
    const nameA = first_word.name.toUpperCase(); // ignore upper and lowercase
    const nameB = second_word.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  },
  [SORT_ORDER.DATE_NEWER]: (first_word, second_word) => {
    return +new Date(second_word.createDate) - +new Date(first_word.createDate);
  },
  [SORT_ORDER.DATE_OLDER]: (first_word, second_word) => {
    return +new Date(first_word.createDate) - +new Date(second_word.createDate);
  },
}
    

