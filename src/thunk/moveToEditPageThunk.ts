import checkSelectedWordListThunkMiddleware from './middlewares/checkSelectedWordList';
import checkSearchWordModalOpenThunkMiddleware from './middlewares/checkSearchWordModalOpen';
import redirectMainThunk from './mains/redirect';
import applyThunkMiddleware from './thunkComponent'; 

// edit word use case thunk with middleware
//  - args: 
//      0: callback: history.push function
//      1: path
//
// 1. check selectedWordList is not empty 
//  - 1.1 if true, cancel redirect (/word/detail) and display select warning modal
//  - 1.2 if false, redirect (/word/edit)
// 2. main: redirect
const moveToEditPageThunk = applyThunkMiddleware(
  checkSelectedWordListThunkMiddleware,
  checkSearchWordModalOpenThunkMiddleware
)(redirectMainThunk);

export default moveToEditPageThunk;

