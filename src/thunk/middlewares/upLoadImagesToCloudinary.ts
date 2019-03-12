import axios from 'axios';
import { ThunkMiddlewareType } from '../thunkComponent';
import extractUploadImages from '../../util/extractUploadImages';
import makePostImageCloudinaryRequest from '../requests/makePostImageCloudinaryRequest';
import { IDef } from '../../domains/def';
const findIndex = require('lodash/findIndex');

//interface UploadResponse {
  //wordId: string;
  //defId: string;
  //imageURL: string;
//}

/**
 * update images in form to Cloudinary image server 
 *
 * - 
 *
 * @param { IWord[] } - args[0] : words to be updated 
 *  
 **/
const upLoadImagesToCloudinaryThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {

  const wordsForm = args[0];
  const wordsState = getState().getIn([ 'entities', 'words' ]); 
  const selectedWordList = getState().get('selectedWordList');

  const selectedWordListState = selectedWordList.map(( wordId: string ) => {
    return wordsState.get( wordId ).toJS();
  }).toJS();

  // get list of image to be uploaded
  const targetUploadImages = extractUploadImages(selectedWordListState, wordsForm); 

  if (targetUploadImages.length !== 0) {
    // make axios post to save the images in form
    const uploadsRequest = targetUploadImages.map(( image: IDef ) => {
      return new Promise(( res, rej ) => {
        const request = makePostImageCloudinaryRequest(image);
        axios(request)
          .then(( response: any ) => {
            const userData = response.data.public_id.split("/");
            res({
              wordId: userData[1],
              defId: userData[2],
              imageURL: response.data.secure_url,
            })
          })
          .catch(( error ) => rej(error));
      });
    });

    Promise.all(uploadsRequest).then(( responses : any[] ) => {
      // assign response's data url to words in form
      responses.forEach(( res ) => {
        const targetWordIndex = findIndex(wordsForm, ['id', res.wordId]); 
        const targetDefIndex = findIndex(wordsForm[targetWordIndex].defs, ['id', res.defId]);

        wordsForm[targetWordIndex].defs[targetDefIndex].image = res.imageURL;
        delete wordsForm[targetWordIndex].defs[targetDefIndex].imageURL;

      });

      // assign it to args[0]
      args[0] = wordsForm;

      // call next thunk with result  
      dispatch<any>(next(...args)); 
    });
  } else {
    // call next thunk with result  
    dispatch<any>(next(...args)); 
  }
}
export default upLoadImagesToCloudinaryThunkMiddleware;



