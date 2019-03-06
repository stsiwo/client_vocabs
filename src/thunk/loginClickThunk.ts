import redirectMainThunk from './mains/redirect';
import applyThunkMiddleware from './thunkComponent'; 
import toggleLoginModalThunkMiddleware from './middlewares/toggleLoginModal';
import getAccessTokenThunkMiddleware from './middlewares/getAccessToken';

// thunk with middleware
// 1. get access token  
// 2. close modal
// 2. redirect to /word if success
const loginClickThunk = applyThunkMiddleware(
  getAccessTokenThunkMiddleware,
  toggleLoginModalThunkMiddleware
)(redirectMainThunk);

export default loginClickThunk;



