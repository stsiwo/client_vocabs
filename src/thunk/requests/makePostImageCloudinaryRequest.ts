import { getUserNameSession } from '../../util/sessionStorage';
import { IDef } from '../../domains/def';
/**
 * when i use 'fetch' to upload image to cloudinary, it cause error i don't know why
 *  - however, if i use 'axios', it works
 *  - fucking wierd
 **/
const makePostImageCloudinaryRequest: ( input: IDef ) => object = ( input ) => {

  const userName = getUserNameSession();
  const formData = new FormData();
  formData.append('file', input.imageFile);
  formData.append('upload_preset', 'tzja68uu');
  formData.append('folder', `${ userName }/${ input.wordId }/${ input.id }/`);


  return {
    url: `${ process.env.CLOUDINARY_API_URL }/image/upload`,
    method: 'POST',
    data: formData, 
    headers: {
      //"Content-Type": "multipart/form-data;boundary='boundary'",
      //"X-Requested-With": "XMLHttpRequest"
    }
  };
}
export default makePostImageCloudinaryRequest;




