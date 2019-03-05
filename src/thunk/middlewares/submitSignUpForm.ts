import { ThunkMiddlewareType } from '../thunkComponent';
import makeSignUpFormRequest from '../requests/makeSignUpFormRequest';
import myFetch from '../asyncs/myFetch';

/**
 * submit signUp form middleware thunk 
 *
 * @param { ISignUpUserForm } - args[0] : signUp form data 
 *  
 **/
const submitSignUpFormThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {

  const userFormData = args[0];

  const request = makeSignUpFormRequest(userFormData);

  const isSignUpCompleted = await myFetch(request);

  if (isSignUpCompleted) {
    // call next thunk
    dispatch<any>(next(...args)); 
  } else {
    // should display error message as flash message
    // like something wrong, please try later or something...
    //   - need to create FlashMessage Component 
    //   #NEED_IMPLEMENT
  }


}
export default submitSignUpFormThunkMiddleware;



