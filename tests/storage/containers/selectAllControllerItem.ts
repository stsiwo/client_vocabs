import { selectAllIconClickWrapperThunkType } from '../../../src/thunk/selectAllIconClick';

export const selectAllIconClickWrapperThunkDummyFunc: selectAllIconClickWrapperThunkType = (  ) => ( dispatch, getState ) => {
  dispatch({ type: "dummy_thunk_action", });
}

