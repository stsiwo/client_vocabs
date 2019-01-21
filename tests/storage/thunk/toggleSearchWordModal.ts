import { toggleSearchWordModalWrapperThunkType } from '../../../src/thunk/toggleSearchWordModal';

export const toggleSearchWordModalWrapperThunkDummyFunc: toggleSearchWordModalWrapperThunkType = (  ) => ( dispatch, getState ) => {
  dispatch({ type: "dummy_thunk_action", });
}
