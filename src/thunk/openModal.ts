import { AnyAction } from 'redux';
import { INormalizedState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import closeSearchWordModalWrapperThunk from './closeSearchWordModal';

/**
 * this thunk for close SearchWordModal when users open another modal
 * while SearchWordModal is open
 **/
type openModalWrapperThunkType = (modalActionCreator: (isOpen: boolean) => AnyAction) => ThunkAction<void, INormalizedState, undefined, AnyAction>;

export const openModalWrapperThunk: openModalWrapperThunkType = ( modalActionCreator ) => ( dispatch, getState ) => {
  // get isSearchWordModalOpen to check it's open or not
  const { isSearchWordModalOpen } = getState().ui;
  // if open, close SearchWordModal and open the modal that users want to open
  // dispatch another thunk below inside this thunk. is that ok?
  if ( isSearchWordModalOpen ) {
    dispatch(closeSearchWordModalWrapperThunk());
  }
  // if not, just open the modal  
  dispatch(modalActionCreator(true));
}


