import { IState } from '../state/type';
import { Record } from 'immutable';
import { Dispatch } from 'redux';
/**
 *  change listener: every time a state change , this listener is called
 *    - this one is to check that a user is logged in or not
 **/
declare const loginChangeListener: (state: Record<IState>, dispatch: Dispatch<import("redux").AnyAction>) => void;
export default loginChangeListener;
