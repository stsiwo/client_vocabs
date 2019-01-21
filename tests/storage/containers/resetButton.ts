import { resetSortFilterWrapperThunkType } from '../../../src/thunk/resetSortFilter';

export const resetSortFilterWrapperThunkDummyFunc: resetSortFilterWrapperThunkType = (  ) => ( dispatch, getState ) => {
  dispatch({ type: "dummy_thunk_action", });
}

