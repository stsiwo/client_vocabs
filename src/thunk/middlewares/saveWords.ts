import { ThunkMiddlewareType } from '../thunkComponent';
import saveAsync from '../asyncs/save';


/**
 * thunk middleware:
 *  - save words in remote 
 *  - next is main thunk to update words ( entities ) in redux state
 **/

const saveWordsThunkMiddleware: ThunkMiddlewareType = ( next ) => ( ...args ) => async ( dispatch, getState ) => {
  // async save 
  // current idea is use PUT bulk update or create operation for newly created or updated words
  try {
    // call put request to server, then get body of response ( updated words: IWord[] ) 
    // args must include this.props.values which is from formik
    const updatedWords = await saveAsync(args[0]);

    // if saving in remote is ok, proceed to updating redux state otherwise cancel the updatedWords opeartion in redux state 
    // for now, I compare result with undefined (suppose fetch return undefined when saving in remote operation failed)
    // this might be change (e.g., if (updatedWords.errors !== 0) or so)
    dispatch(next(updatedWords));

  } catch( reason ) {
    // do not update redux state because saving in remote failed
    // do nothing for now. may do something like display this error message to user.
    console.log(reason.error);
  }

  /*************************************************************
   * this approach might be time consuming because takes following procedures 
   * 1. saving updated words in remote 
   * 2. wait for the response
   * 3. if ok, update words in redux state
   * 
   * but the other approach is to use parallel flow to saving in remote and update redux state at the same time.
   *  - the reason why i don't want this approach is inconsistency when it's failed.
   *  - for example, if saving in remote would fail and update words in redux state, state and data in remote are different
   *  - so for now, i use safe approach even if it's time consuming
   **************************************************************/
}
export default saveWordsThunkMiddleware;






