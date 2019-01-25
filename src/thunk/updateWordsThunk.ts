import checkWordFormErrorThunkMiddleware from './middlewares/checkWordFormError';
import saveWordsThunkMiddleware from './middlewares/saveWords';
import updateWordsMainThunk from './mains/updateWords';
import applyThunkMiddleware from './thunkComponent'; 

// thunk with middleware
// 1. check word form error state 
//  - if yes, cancel
// 2. save words in remote
//  - wait for finish in remote
// 3. update words in redux state
const updateWordsThunk = applyThunkMiddleware(
  checkWordFormErrorThunkMiddleware,
  saveWordsThunkMiddleware, 
)(updateWordsMainThunk);

export default updateWordsThunk;

