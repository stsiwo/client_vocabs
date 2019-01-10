import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { changeSortWrapperThunk, changeFilterWrapperThunk } from '../reducers/thunk'; 
import { initialNormalizedState } from '../state/index';

/**
 * this thunk for close SearchWordModal when users open another modal
 * while SearchWordModal is open
 **/
export type resetSortFilterWrapperThunkType = () => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const resetSortFilterWrapperThunk: resetSortFilterWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // reset currentFilter, currentSort
  // default values from initialNormalizedState ( state/index.ts )
  dispatch(changeSortWrapperThunk(initialNormalizedState.currentSort));
  dispatch(changeFilterWrapperThunk(initialNormalizedState.currentFilter));
}
export default resetSortFilterWrapperThunk;


