import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import NewControllerItem from '../../representationals/business/Controller/NewControllerItem';
import { INormalizedState } from '../../state/type';
import addNewWordFormWrapperThunk from '../../thunk/addNewWordForm';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // there is no modal to close so send undefined as args
  newIconClick: () => { dispatch<any>( addNewWordFormWrapperThunk() )},
});

export default connect( mapStateToProps, mapDispatchToProps )( NewControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( NewControllerItem );




