import { StateType } from '../state/type';
import { IWordListItem, IWordNameList } from '../domains/word';
import { IWord } from '../domains/word';
import { OrderedSet, Record } from 'immutable';
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
export declare const getWordListItem: (displayedWordList: OrderedSet<string>, selectedWordList: OrderedSet<string>, entities: Record<StateType.IEntity>) => OrderedSet<IWordListItem>;
/**
 * get selected word list ( contains full definition )
 *
 * @param {StateType.ISelectedWordList} selectedWordList - sorted word list state
 * @param {StateType.IEntity} entities - entities state
 * @return {List<IWord>} immutable List containing full word
 **/
export declare const getSelectedWordList: (selectedWordList: OrderedSet<string>, entities: Record<StateType.IEntity>) => OrderedSet<IWord>;
/**
 * get word list with its name for sorting purpose
 *
 * @param {StateType.ISortedWordList} sortedWordList - sorted word list state
 * @param {StateType.IEntity} entities - entities state
 * @return {List<IWordNameList>} immutable List with type IWordNameList
 **/
export declare const getWordNameList: (sortedWordList: OrderedSet<string>, entities: Record<StateType.IEntity>) => OrderedSet<IWordNameList>;
/**
 * filter words which only contains filter value (from input)
 *
 * @param {StateType.IDisplayedWordList} displayedWordList - displayed word list state
 * @param {StateType.IEntity} entities - entities state
 * @param {number[]} newFilter - new filter to compare
 * @return {List<IWordDefsList>} immutable List with type IWordDefsList
 **/
export declare const filter: (displayedWordList: OrderedSet<string>, entities: Record<StateType.IEntity>, newFilter: number[]) => OrderedSet<string>;
