import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose */ } from 'redux';
import BackControllerItem from '../../representationals/business/Controller/BackControllerItem';
import { INormalizedState } from '../../state/type';
//import { withRouter } from 'react-router-dom';
import wordFormErrorCheckWrapperThunk from '../../thunk/wordFormErrorCheck';
import history from '../../routeHistory'; 

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  backWordClick: () => { dispatch<any>(wordFormErrorCheckWrapperThunk(() => { history.push("/word") }))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( BackControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( BackControllerItem );





