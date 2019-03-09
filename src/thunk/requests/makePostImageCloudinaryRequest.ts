/**
 * when i use 'fetch' to upload image to cloudinary, it cause error i don't know why
 *  - however, if i use 'axios', it works
 *  - fucking wierd
 **/
const makePostImageCloudinaryRequest: ( input: File ) => object = ( input ) => {

  const formData = new FormData();
  formData.append('file', input);
  formData.append('upload_preset', 'tzja68uu');

  return {
    url: `https://api.cloudinary.com/v1_1/dre4nikvb/image/upload`,
    method: 'POST',
    data: formData, 
    headers: {
      //"Content-Type": "multipart/form-data;boundary='boundary'",
      //"X-Requested-With": "XMLHttpRequest"
    }
  };
}
export default makePostImageCloudinaryRequest;




