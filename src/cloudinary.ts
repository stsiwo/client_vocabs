import axios from 'axios';
import makePostImageCloudinaryRequest from './thunk/requests/makePostImageCloudinaryRequest';
/**
 * typescript and js can co-exists in the same project
 *  - use "allowJS" option to true
 *  - can import ts file into js ( maybe be vice versa )
 *  - don't need to create d.ts for js files ( maybe )
 *
 *  - seems like not working for me, imported module cause errors:
 *    Uncaught (in promise) TypeError: makePostImageCloudinaryRequest is not a function
 **/

const upload = async ( image: File ) => {

  const request = makePostImageCloudinaryRequest(image);

  const result = await axios(request);

  console.log(result);

}
export default upload;  

