import { AnyAction } from 'redux';
import { IState } from "../state/type"; 
import { ThunkAction } from 'redux-thunk';
import toggleSearchWordModalWrapperThunk from './toggleSearchWordModal';
import { Record } from 'immutable';

/**
 * this thunk for close SearchWordModal when users open another modal
 * while SearchWordModal is open
 **/
export type openModalWrapperThunkType = (modalActionCreator: (isOpen: boolean) => AnyAction | undefined) => ThunkAction<void, Record<IState>, undefined, AnyAction>;

const openModalWrapperThunk: openModalWrapperThunkType = ( modalActionCreator ) => ( dispatch, getState ) => {
  // get isSearchWordModalOpen to check it's open or not
  const isSearchWordModalOpen = getState().get("ui").get('isSearchWordModalOpen');
  // if open, close SearchWordModal and open the modal that users want to open
  // dispatch another thunk below inside this thunk. is that ok?
  if ( isSearchWordModalOpen ) {
    dispatch(toggleSearchWordModalWrapperThunk());
  }
  // if not, just open the modal  
  if (modalActionCreator) dispatch(modalActionCreator(true));
}
export default openModalWrapperThunk;

