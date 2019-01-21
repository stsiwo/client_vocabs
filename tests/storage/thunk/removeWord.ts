import { removeWordWrapperThunkType } from '../../../src/thunk/removeWord';

export const removeWordWrapperThunkDummyFunc: removeWordWrapperThunkType = (  ) => ( dispatch, getState ) => {
  dispatch({ type: "dummy_thunk_action", });
}

