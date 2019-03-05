import redirectMainThunk from './mains/redirect';
import applyThunkMiddleware from './thunkComponent'; 
import submitSignUpFormThunkMiddleware from './middlewares/submitSignUpForm';
import toggleSignUpModalThunkMiddleware from './middlewares/toggleSignUpModal';
import getAccessTokenThunkMiddleware from './middlewares/getAccessToken';

// thunk with middleware
// 1. submit sign up form 
// 2. redirect to /word if success
const signUpClickThunk = applyThunkMiddleware(
  submitSignUpFormThunkMiddleware,
  getAccessTokenThunkMiddleware,
  toggleSignUpModalThunkMiddleware
)(redirectMainThunk);

export default signUpClickThunk;


