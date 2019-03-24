/**
 * get js plain array of currentFilter state from immutable currentFilter state
 *  - use this place to convert immutable to plain js
 **/
declare const getCurrentFilterArraySelector: import("reselect").OutputParametricSelector<import("immutable").Record<import("../../state/type").IState>, {}, any[], (res: import("immutable").Set<PosEnum>) => any[]>;
export default getCurrentFilterArraySelector;
