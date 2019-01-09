import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose */ } from 'redux';
import DeleteControllerItem from '../../representationals/business/Controller/DeleteControllerItem';
import { INormalizedState } from '../../state/type';
//import { withRouter } from 'react-router-dom';
import { toggleDeleteConfirmModalAction, toggleSelectWarningModalAction } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => {
  const isSelectedWordListEmpty = (state.selectedWordList.length === 0) ? true : false;
  return {
    isSelectedWordListEmpty: isSelectedWordListEmpty,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleDeleteConfirmModalClick: ( isOpen: boolean ) => { dispatch( toggleDeleteConfirmModalAction( isOpen ))}, 
  toggleSelectWarningModalClick: ( isOpen: boolean ) => { dispatch( toggleSelectWarningModalAction( isOpen ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( DeleteControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( DeleteControllerItem );




