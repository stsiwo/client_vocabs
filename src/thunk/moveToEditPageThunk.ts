import checkSelectedWordListThunkMiddleware from './middlewares/checkSelectedWordList';
import redirectMainThunk from './mains/redirect';
import applyThunkMiddleware from './thunkComponent'; 

// edit word use case thunk with middleware
// 1. check selectedWordList is not empty 
//  - 1.1 if true, cancel redirect (/word/detail) and display select warning modal
//  - 1.2 if false, redirect (/word/edit)
// 2. main: redirect
const moveToEditPageThunk = applyThunkMiddleware(
  checkSelectedWordListThunkMiddleware
)(redirectMainThunk);

export default moveToEditPageThunk;

