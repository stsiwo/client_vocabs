import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import NavBar from '../../representationals/business/NavBar/NavBar';
import { IState } from '../../state/type';

const mapStateToProps = (state: IState, ownProps: {}) => ({
  wordFormError: state.wordFormError,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )( NavBar );






