import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import EditControllerItem from '../../representationals/business/Controller/EditControllerItem';
import { INormalizedState } from '../../state/type';
//import { withRouter } from 'react-router-dom';
import { toggleSelectWarningModalAction } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => {
  
  const isSelectedWordListEmpty = (state.selectedWordList.length === 0) ? true : false;
  return {
    isSelectedWordListEmpty: isSelectedWordListEmpty,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSelectWarningModalClick: ( isOpen: boolean ) => { dispatch( toggleSelectWarningModalAction( isOpen ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( EditControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( EditControllerItem );



