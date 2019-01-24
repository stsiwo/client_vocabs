import checkWordFormErrorThunkMiddleware from './middlewares/checkWordFormError';
import saveWordsMainThunk from './mains/save';
import applyThunkMiddleware from './thunkComponent'; 

// thunk with middleware
// 1. check word form error state 
//  - 1.1 if true, cancel saving 
//  - 1.2 if false, save it 
const saveWordsThunk = applyThunkMiddleware(
  checkWordFormErrorThunkMiddleware
)(saveWordsMainThunk);

export default saveWordsThunk;

