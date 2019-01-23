import checkWordFormErrorThunkMiddleware from './middlewares/checkWordFormError';
import redirectMainThunk from './mains/redirect';
import applyThunkMiddleware from './thunkComponent'; 

// thunk with middleware
// 1. check word form error state 
//  - 1.1 if true, cancel redirect (back to /word)
//  - 1.2 if false, redirect (back to /word)
const backToWordPageThunk = applyThunkMiddleware(
  checkWordFormErrorThunkMiddleware
)(redirectMainThunk);

export default backToWordPageThunk;
