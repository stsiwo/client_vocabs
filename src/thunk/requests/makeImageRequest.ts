import getVocabsApiUrl from '../../util/getVocabsApiUrl';

const makeImageRequest: <I extends Blob = Blob>( input?: I ) => Request = ( input ) => {

  const formData = new FormData();
  formData.append('myFile', input);
  const api_url = getVocabsApiUrl();

  return new Request(`${ api_url }/word/image`, {
    method: 'POST',
    body: formData, 
    mode: "cors",
    headers: {
      /**
       * when i define content-type for multipart/form-date
       * it always fails in server-side, it empty body and file
       * I don't know why
       **/
      //"Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW----"
    }
  });
}
export default makeImageRequest;



