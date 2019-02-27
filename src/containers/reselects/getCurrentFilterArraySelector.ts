import { createSelector } from 'reselect'
import { StateType } from '../../state/type';
import { getCurrentFilterInputSelector } from './inputSelector';

/**
 * get js plain array of currentFilter state from immutable currentFilter state 
 *  - use this place to convert immutable to plain js
 **/
const getCurrentFilterArraySelector = createSelector(
  [ getCurrentFilterInputSelector ],
  ( currentFilter: StateType.ICurrentFilter ) => {
    return currentFilter.toJS(); 
  }
)
export default getCurrentFilterArraySelector;

