import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import NewControllerItem from '../../representationals/business/Controller/NewControllerItem';
import { IState } from '../../state/type';
import addNewWordFormThunk from '../../thunk/addNewWordForm';

const mapStateToProps = (state: IState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // there is no modal to close so send undefined as args
  newIconClick: (pushCallback: (obj: any) => void) => { dispatch<any>( addNewWordFormThunk( pushCallback ))},
});

export default connect( mapStateToProps, mapDispatchToProps )( NewControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( NewControllerItem );




