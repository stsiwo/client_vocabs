import checkWordFormErrorThunkMiddleware from './middlewares/checkWordFormError';
import updateWordsRemoteMainThunk from './mains/updateWordsRemote';
import applyThunkMiddleware from './thunkComponent'; 
import updateWordsThunkMiddleware from './middlewares/updateWords';

// thunk with middleware
// 1. check word form error state 
//  - if yes, cancel and display defineWord warning modal
// 2 update/create words in redux state
// 3. (aysnc) save words in remote
const updateWordsThunk = applyThunkMiddleware(
  checkWordFormErrorThunkMiddleware,
  updateWordsThunkMiddleware
)(updateWordsRemoteMainThunk);

export default updateWordsThunk;

