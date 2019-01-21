import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import EditControllerItem from '../../representationals/business/Controller/EditControllerItem';
import { INormalizedState } from '../../state/type';
import editWordWrapperThunk from '../../thunk/editWord';
//import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  editWordClick: () => { dispatch<any>( editWordWrapperThunk() )}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( EditControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( EditControllerItem );



