import checkWordFormErrorThunkMiddleware from './middlewares/checkWordFormError';
import updateWordsMainThunk from './mains/updateWords';
import applyThunkMiddleware from './thunkComponent'; 

// thunk with middleware
// 1. check word form error state 
//  - if yes, cancel and display defineWord warning modal
// 2. save words in remote
//  - wait for finish in remote
// 3. update words in redux state
const updateWordsThunk = applyThunkMiddleware(
  checkWordFormErrorThunkMiddleware,
)(updateWordsMainThunk);

export default updateWordsThunk;

