import { IState } from '../state/type';
import { Record } from 'immutable';
import { Dispatch } from 'redux';
import { toggleLoginActionCreator } from '../actions/index';

/**
 *  change listener: every time a state change , this listener is called
 *    - this one is to check that a user is logged in or not
 **/
const loginChangeListener = (state: Record<IState>, dispatch: Dispatch) => () => {

  const accessToken = sessionStorage.getItem('access_token');

  if (accessToken) { 
    dispatch(toggleLoginActionCreator(true));
  } else {
    dispatch(toggleLoginActionCreator(false));
  }
};

export default loginChangeListener;
