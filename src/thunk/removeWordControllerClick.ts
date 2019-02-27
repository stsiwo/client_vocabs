import checkSearchWordModalOpenThunkMiddleware from './middlewares/checkSearchWordModalOpen';
import checkSelectedWordListThunkMiddleware from './middlewares/checkSelectedWordList';
import { toggleDeleteConfirmModalActionCreator } from '../actions/index';
import applyThunkMiddleware from './thunkComponent'; 

/**
 * remove word contoller icon click use case thunk
 *  1. check selected word list is not empty
 *   1.1. if empty, cancel this use case and select warning modal
 *   1.2. if not empty, preceed to next thunk middleware
 *  2. check search word modal is opened, if so, close it before next middleware
 *  3. open delete confirm modal
 **/   
const removeWordControllerClickThunk = applyThunkMiddleware(
  checkSelectedWordListThunkMiddleware,
  checkSearchWordModalOpenThunkMiddleware,
)(toggleDeleteConfirmModalActionCreator);

export default removeWordControllerClickThunk;


