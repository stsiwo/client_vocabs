import { StateType } from '../state/type';
import { IWordListItem, IWordNameList } from '../domains/word';
import { IDef } from '../domains/def';
import { IWord } from '../domains/word';
import { List, Record } from 'immutable';
/**
 * get IWordListItem[] of current State
 *  - create word list item for /word page to display only word name
 *  1. displayedWordList is currently displayed on screen so create wordlist item based on this state.
 *  2. displayedWordList only contains wordid so need to get name from entities
 *  3. also need to check selectedWordList to make sure currently selected word
 *  4. return wordlist item (type should be immutable: does not really matter, either way, it's converted plain js props in toJS HOC (i chose List)
 **/

/**************************************************************************
 *  TS2339: Property 'words' does not exist on type 'Record<IEntity>'.
 *  Record (Immutablejs) can be supposed to use dot to refer to its property but produce above error. I have no idea.
 *  so should use like immutable way to access property (like get() or getIn())
 **************************************************************************/
export const getWordListItem = (displayedWordList: StateType.IDisplayedWordList, selectedWordList: StateType.ISelectedWordList, entities: Record<StateType.IEntity>): List<IWordListItem> => {
  return displayedWordList.map(( wordId: string ) => {
    return {
      id: wordId,
      name: entities.get('words').getIn([ wordId, 'name' ]),
      isChecked: selectedWordList.includes(wordId),
    }
  });
}
/**
 * get selected word list ( contains full definition ) 
 *
 * @param {StateType.ISelectedWordList} selectedWordList - sorted word list state
 * @param {StateType.IEntity} entities - entities state 
 * @return {List<IWord>} immutable List containing full word 
 **/

export const getSelectedWordList = (selectedWordList: StateType.ISelectedWordList, entities: Record<StateType.IEntity>): List<IWord> => selectedWordList.map(( wordId: string ) => entities.getIn([ 'words', wordId ]));

/**
 * get word list with its name for sorting purpose
 *
 * @param {StateType.ISortedWordList} sortedWordList - sorted word list state
 * @param {StateType.IEntity} entities - entities state 
 * @return {List<IWordNameList>} immutable List with type IWordNameList
 **/
export const getWordNameList = ( sortedWordList: StateType.ISortedWordList, entities: Record<StateType.IEntity> ): List<IWordNameList> => sortedWordList.map(( wordId: string ) => ({
  id: wordId,
  name: entities.get('words').getIn([ wordId, 'name' ]),
}));

/**
 * filter words which only contains filter value (from input) 
 *
 * @param {StateType.IDisplayedWordList} displayedWordList - displayed word list state
 * @param {StateType.IEntity} entities - entities state 
 * @param {number[]} newFilter - new filter to compare 
 * @return {List<IWordDefsList>} immutable List with type IWordDefsList
 **/
export const filter = ( displayedWordList: StateType.IDisplayedWordList, entities: Record<StateType.IEntity>, newFilter: number[] ): List<string> => displayedWordList.filter(( wordId: string ) => entities.get('words').getIn([ wordId, 'defs' ]).find(( def: IDef ) => newFilter.includes(def.pos)) !== undefined )  
