import checkSearchWordModalOpenThunkMiddleware from './middlewares/checkSearchWordModalOpen';
import { toggleSortFilterModalActionCreator } from '../actions/index';
import applyThunkMiddleware from './thunkComponent'; 

/**
 * sort & filter controller click  
 *  1. check search word modal is opened, if so, close it before next middleware  
 *  3. open sort & filter modal 
 **/   
const sortFilterControllerClickThunk = applyThunkMiddleware(
  checkSearchWordModalOpenThunkMiddleware,
)(toggleSortFilterModalActionCreator);

export default sortFilterControllerClickThunk;



