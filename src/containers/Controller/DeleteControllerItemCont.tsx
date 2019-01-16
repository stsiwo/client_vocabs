import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose */ } from 'redux';
import DeleteControllerItem from '../../representationals/business/Controller/DeleteControllerItem';
import { INormalizedState } from '../../state/type';
//import { withRouter } from 'react-router-dom';
import { toggleDeleteConfirmModalActionCreator, toggleSelectWarningModalActionCreator } from '../../actions/index';
import openModalWrapperThunk from '../../thunk/openModal';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => {
  const isSelectedWordListEmpty = (state.selectedWordList.length === 0) ? true : false;
  return {
    isSelectedWordListEmpty: isSelectedWordListEmpty,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleDeleteConfirmModalClick: ( isOpen: boolean ) => { dispatch<any>( openModalWrapperThunk( toggleDeleteConfirmModalActionCreator ))}, 
  toggleSelectWarningModalClick: ( isOpen: boolean ) => { dispatch<any>( openModalWrapperThunk( toggleSelectWarningModalActionCreator ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( DeleteControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( DeleteControllerItem );




