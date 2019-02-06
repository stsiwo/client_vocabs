import { StateType } from '../state/type';
import { OrderedSet, Record } from 'immutable';
import { Map } from 'immutable';
/**
 * filter words which only contains filter value (from input) 
 *
 * @param {StateType.IEntity} entities - entities state 
 * @param {StateType.ICurrentFilter} newFilter - new filter to compare 
 * @return {OrderedSet<IWordDefsList>} immutable List with type IWordDefsList
 **/
const filterWords = ( entities: Record<StateType.IEntity>, newFilter: StateType.ICurrentFilter ): OrderedSet<string> => {
  
  // return filtered displayedWordList 

  const filteredWords = entities.get('words').filter(( word ) => {
    // check each word contains a def.pos which is contained in newFilter
    const isWordContainNewFilterDef = word.get('defs').find(( def: Map<string, any> ) => {
      /*********************************************
       * should def.pos type is number but it's string,
       * should refactor this !!!!!!!!!!!!!!!!!!!!!!!!
       *********************************************/
      return newFilter.includes(parseInt(def.get('pos')));
    });
    
    return isWordContainNewFilterDef ? true : false;
  });

  return OrderedSet<string>(filteredWords.keys());
}

export default filterWords;
