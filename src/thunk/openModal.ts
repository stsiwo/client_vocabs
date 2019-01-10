import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import toggleSearchWordModalWrapperThunk from './toggleSearchWordModal';

/**
 * this thunk for close SearchWordModal when users open another modal
 * while SearchWordModal is open
 **/
export type openModalWrapperThunkType = (modalActionCreator: (isOpen: boolean) => AnyAction) => ThunkAction<void, INormalizedState, undefined, AnyAction>;

const openModalWrapperThunk: openModalWrapperThunkType = ( modalActionCreator ) => ( dispatch, getState ) => {
  // get isSearchWordModalOpen to check it's open or not
  const { isSearchWordModalOpen } = getState().ui;
  // if open, close SearchWordModal and open the modal that users want to open
  // dispatch another thunk below inside this thunk. is that ok?
  if ( isSearchWordModalOpen ) {
    dispatch(toggleSearchWordModalWrapperThunk());
  }
  // if not, just open the modal  
  dispatch(modalActionCreator(true));
}
export default openModalWrapperThunk;

