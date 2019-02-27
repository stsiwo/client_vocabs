import checkWordFormErrorThunkMiddleware from './middlewares/checkWordFormError';
import redirectMainThunk from './mains/redirect';
import applyThunkMiddleware from './thunkComponent'; 

// thunk with middleware
// 1. check word form error state 
//  - 1.1 if true, cancel direct 
//  - 1.2 if false, direct 
const navLinkThunk = applyThunkMiddleware(
  checkWordFormErrorThunkMiddleware
)(redirectMainThunk);

export default navLinkThunk;

