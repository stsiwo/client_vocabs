import { AnyAction } from "redux";
import { IState } from './state/type';
/**
 * better not to rely on the seconds arg of createStore function as initial state. the author said there is wierd stuff so, ALWAYS define initial state in each reducer!!!
 **/
declare const store: import("redux").Store<import("immutable").Record<IState>, AnyAction>;
export default store;
