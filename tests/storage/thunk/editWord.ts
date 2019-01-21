import { editWordWrapperThunkType } from '../../../src/thunk/editWord';

export const editWordWrapperThunkDummyFunc: editWordWrapperThunkType = (  ) => ( dispatch, getState ) => {
  dispatch({ type: "dummy_thunk_action", });
}


