import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose */ } from 'redux';
import DeleteControllerItem from '../../representationals/business/Controller/DeleteControllerItem';
import { INormalizedState } from '../../state/type';
//import { withRouter } from 'react-router-dom';
import checkDeleteWordWrapperThunk from '../../thunk/checkDeleteWord';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  deleteWordClick: () => { dispatch<any>(checkDeleteWordWrapperThunk())}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( DeleteControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( DeleteControllerItem );




