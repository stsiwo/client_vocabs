import { IState } from '../state/type';
import { Record } from 'immutable';
import { Dispatch } from 'redux';
import { toggleLoginActionCreator } from '../actions/index';
import { getAccessTokenSession } from '../util/sessionStorage';

/**
 *  change listener: every time a state change , this listener is called
 *    - this one is to check that a user is logged in or not
 **/
const loginChangeListener = (state: Record<IState>, dispatch: Dispatch) => {

  const isLogin = getAccessTokenSession() ? true : false;

  if (state.get('login') !== isLogin) dispatch(toggleLoginActionCreator(isLogin));
};

export default loginChangeListener;
