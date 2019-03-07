import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import NavBar from '../../representationals/business/NavBar/NavBar';
import { IState } from '../../state/type';
import { Record } from 'immutable';
import navLinkThunk from '../../thunk/navLink';
import logoutMainThunk from '../../thunk/mains/logout';
import { toggleSignUpModalActionCreator, toggleLoginModalActionCreator } from '../../actions/index';
import { authenticateSession } from '../../util/sessionStorage';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  wordFormError: state.get('wordFormError'),
  isSignUpModalOpen: state.getIn([ 'ui', 'isSignUpModalOpen' ]),
  isLoginModalOpen: state.getIn([ 'ui', 'isLoginModalOpen' ]),
  isLogin: authenticateSession()
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  linkClick: (path: string) => { dispatch<any>( navLinkThunk(path))},
  signupClick: () => { dispatch<any>( toggleSignUpModalActionCreator( true ))},
  loginClick: () => { dispatch<any>( toggleLoginModalActionCreator( true ))},
  logoutClick: () => { dispatch<any>( logoutMainThunk() ) }
});


/**
 * when you have any props in parent component (in this case, <NavBarCont props={ ... } ... /> in Header
 * you need to write like blow;
 **/

export default connect(mapStateToProps, mapDispatchToProps )( NavBar ); 



