import { addNewWordFormWrapperThunkType } from '../../../src/thunk/addNewWordForm';

export const addNewWordFormWrapperThunkDummyFunc: addNewWordFormWrapperThunkType = (  ) => ( dispatch, getState ) => {
  dispatch({ type: "dummy_thunk_action", });
}


