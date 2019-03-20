import { StateType } from '../state/type';
import { Record, OrderedSet } from 'immutable';
declare const sortWords: (sortedWordList: OrderedSet<string>, entities: Record<StateType.IEntity>, newSort: number) => OrderedSet<string>;
export default sortWords;
