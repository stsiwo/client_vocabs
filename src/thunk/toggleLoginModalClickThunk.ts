import noMainThunk from './mains/noMainThunk';
import closeErrorFlashMessageThunkMiddleware from './middlewares/closeErrorFlashMessage';
import toggleLoginModalThunkMiddleware from './middlewares/toggleLoginModal';
import applyThunkMiddleware from './thunkComponent'; 

// thunk with middleware
// 1. close Error Flash Message if opened
// 2. toggle login modal
const toggleLoginModalClickThunk = applyThunkMiddleware(
  closeErrorFlashMessageThunkMiddleware,
  toggleLoginModalThunkMiddleware
)(noMainThunk);

export default toggleLoginModalClickThunk;


