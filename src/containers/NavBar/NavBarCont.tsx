import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import NavBar from '../../representationals/business/NavBar/NavBar';
import { IState } from '../../state/type';
import { Record } from 'immutable';
import { withRouter } from 'react-router-dom';
import navLinkThunk from '../../thunk/navLink';
import logoutMainThunk from '../../thunk/mains/logout';
import { RouteComponentProps } from 'react-router-dom';
import { toggleSignUpModalActionCreator, toggleLoginModalActionCreator } from '../../actions/index';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  wordFormError: state.get('wordFormError'),
  isSignUpModalOpen: state.getIn([ 'ui', 'isSignUpModalOpen' ]),
  isLoginModalOpen: state.getIn([ 'ui', 'isLoginModalOpen' ]),
  isLogin: state.get('login')
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  linkClick: (pushCallback: ( path: string ) => void ) => { dispatch<any>( navLinkThunk( pushCallback ))},
  signupClick: () => { dispatch<any>( toggleSignUpModalActionCreator( true ))},
  loginClick: () => { dispatch<any>( toggleLoginModalActionCreator( true ))},
  logoutClick: () => { dispatch<any>( logoutMainThunk() ) }
});


/**
 * when you have any props in parent component (in this case, <NavBarCont props={ ... } ... /> in Header
 * you need to write like blow;
 **/
interface Props extends RouteComponentProps {
  isOpen?: boolean;
}

export default withRouter<Props>(connect(mapStateToProps, mapDispatchToProps )( NavBar )); 



