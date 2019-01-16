import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import EditControllerItem from '../../representationals/business/Controller/EditControllerItem';
import { INormalizedState } from '../../state/type';
//import { withRouter } from 'react-router-dom';
import { toggleSelectWarningModalActionCreator } from '../../actions/index';
import openModalWrapperThunk from '../../thunk/openModal';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => {
  
  const isSelectedWordListEmpty = (state.selectedWordList.length === 0) ? true : false;
  return {
    isSelectedWordListEmpty: isSelectedWordListEmpty,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSelectWarningModalClick: () => { dispatch<any>( openModalWrapperThunk(toggleSelectWarningModalActionCreator))}, 
  closeSearchWordModalClick: () => { dispatch<any>( openModalWrapperThunk(undefined))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( EditControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( EditControllerItem );



