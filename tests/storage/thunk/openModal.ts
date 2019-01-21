import { openModalWrapperThunkType } from '../../../src/thunk/openModal';

export const openModalWrapperThunkDummyFunc: openModalWrapperThunkType = (  ) => ( dispatch, getState ) => {
  dispatch({ type: "dummy_thunk_action", });
}

