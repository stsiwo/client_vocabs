import axios from 'axios';
import { ThunkMiddlewareType } from '../thunkComponent';
import extractDestroyImages from '../../util/extractDestroyImages';
import makeDestroyImagesRequest from '../requests/makeDestroyImagesRequest';

/**
 * delete images  
 *
 * - 
 *
 * @param { IWord[] } - args[0] : words to be updated 
 *  
 **/
const deleteImagesThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {

  const wordsForm = args[0];
  const wordsState = getState().getIn([ 'entities', 'words' ]); 
  const selectedWordList = getState().get('selectedWordList');

  const selectedWordListState = selectedWordList.map(( wordId: string ) => {
    return wordsState.get( wordId ).toJS();
  }).toJS();

  // get list of image to be uploaded
  const targetDestroyImages = extractDestroyImages(selectedWordListState, wordsForm); 

  if (targetDestroyImages.length !== 0) {

    // make request
    const request = makeDestroyImagesRequest(targetDestroyImages);

    // request 
    axios(request).catch(( error ) => console.log(error));
  }

  // call next thunk with result  
  dispatch<any>(next(...args)); 
}
export default deleteImagesThunkMiddleware;




