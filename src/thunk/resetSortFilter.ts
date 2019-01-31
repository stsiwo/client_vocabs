import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import { changeSortWrapperThunk, changeFilterWrapperThunk } from '../reducers/thunk'; 
import { initialState } from '../state/index';

/**
 * this thunk for close SearchWordModal when users open another modal
 * while SearchWordModal is open
 **/
export type resetSortFilterWrapperThunkType = () => ThunkAction<void, IState, undefined, AnyAction>;

const resetSortFilterWrapperThunk: resetSortFilterWrapperThunkType = (  ) => ( dispatch, getState ) => {
  // reset currentFilter, currentSort
  dispatch(changeSortWrapperThunk(initialState.currentSort));
  dispatch(changeFilterWrapperThunk(initialState.currentFilter.toArray()));
}
export default resetSortFilterWrapperThunk;


