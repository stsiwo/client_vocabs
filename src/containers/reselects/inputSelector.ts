import { Record } from 'immutable';
import { IState } from '../../state/type';
/**
 * IMPORTANT: reselect decide whether it should recalculate using transform function based on the output of input-selelctor (below functions) by reference equality.
 *  - so if you want to avoid unncessary recalculation, do not do stupid stuff inside those function!!!!!!!
 **/

/**
 * input selector for a word of entities.words
 * 
 * @param { Record<IState> } state - state
 * @return { IWordImm } immutable IWord 
 **/
export const getWordInputSelector = ( state: Record<IState>, props: { wordId: string; }) => state.getIn(['entities', 'words', props.wordId ]);


/**
 * input selector for a word of entities.words
 *
 * @param { Record<IState> } state - state
 * @return { OrderedSet<string> } selectedWordList in state
 **/
export const getSelectedWordListInputSelector = ( state: Record<IState> ) => state.get('selectedWordList'); 

/**
 * input selector for checking whether specific word id is contained inside selectedWordList
 *
 * @param { Record<IState> } state - state
 * @param { (wordId: string) } props - props 
 * @return { OrderedSet<string> } selectedWordList in state
 **/
export const isWordIdContainInsideSelectedWordListInputSelector = ( state: Record<IState>, props: { wordId: string; } ) => state.get('selectedWordList').includes( props.wordId ); 

/**
 * input selector for currentFilter 
 *
 * @param { Record<IState> } state - state
 * @param { (wordId: string) } props - props 
 * @return { OrderedSet<string> } selectedWordList in state
 **/
export const getCurrentFilterInputSelector = ( state: Record<IState>, props: {} ) => state.get('currentFilter');
