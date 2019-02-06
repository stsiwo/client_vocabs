import removeWordThunkMiddleware from './middlewares/removeWord';
import { toggleDeleteConfirmModalActionCreator } from '../actions/index';
import applyThunkMiddleware from './thunkComponent'; 

/**
 * remove word click use case thunk
 *  1. remove word of selected word item
 *  2. close delete word modal
 *  NOTE: any precondition are met in removeWordControllerClick thunk (see if you need)
 **/   
const removeWordConfirmButtonClickThunk = applyThunkMiddleware(
  removeWordThunkMiddleware,
)(toggleDeleteConfirmModalActionCreator);

export default removeWordConfirmButtonClickThunk;


