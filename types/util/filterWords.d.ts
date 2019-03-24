import { StateType } from '../state/type';
import { OrderedSet, Record } from 'immutable';
/**
 * filter words which only contains filter value (from input)
 *
 * @param {StateType.IEntity} entities - entities state
 * @param {StateType.ICurrentFilter} newFilter - new filter to compare
 * @return {OrderedSet<IWordDefsList>} immutable List with type IWordDefsList
 **/
declare const filterWords: (entities: Record<StateType.IEntity>, newFilter: import("immutable").Set<PosEnum>) => OrderedSet<string>;
export default filterWords;
