import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import NavBar from '../../representationals/business/NavBar/NavBar';
import { INormalizedState } from '../../state/type';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  wordFormError: state.wordFormError,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )( NavBar );






