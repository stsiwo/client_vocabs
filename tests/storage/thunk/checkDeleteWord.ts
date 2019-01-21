import { checkDeleteWordWrapperThunkType } from '../../../src/thunk/checkDeleteWord';

export const checkDeleteWordWrapperThunkDummyFunc: checkDeleteWordWrapperThunkType = (  ) => ( dispatch, getState ) => {
  dispatch({ type: "dummy_thunk_action", });
}

