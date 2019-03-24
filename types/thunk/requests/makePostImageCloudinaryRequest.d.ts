import { IDef } from '../../domains/def';
/**
 * when i use 'fetch' to upload image to cloudinary, it cause error i don't know why
 *  - however, if i use 'axios', it works
 *  - fucking wierd
 **/
declare const makePostImageCloudinaryRequest: (input: IDef) => object;
export default makePostImageCloudinaryRequest;
