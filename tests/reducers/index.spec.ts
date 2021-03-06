import { rootReducer } from '../../src/reducers/rootReducer'; 
import { normalizedState } from '../../src/state';
import { AnyAction } from 'redux';
//import { updateWord } from '../storage/word';
//import { newDef, updateDef } from '../storage/def'; 
import { 
  addNewWordActionCreator, 
  removeWordActionCreator,
  updateWordNameActionCreator,
  addNewDefActionCreator, 
  removeDefActionCreator,
  updateDefPosActionCreator,
  updateDefTextActionCreator,
  updateDefImageActionCreator,
  changeSortActionCreator,
  changeFilterActionCreator,
  toggleSelectWarningModalActionCreator, 
  toggleDeleteConfirmModalActionCreator,
  toggleSortFilterModalActionCreator, 
  toggleSearchWordModalActionCreator,
  toggleSelectedWordListActionCreator,
  selectAllSelectedWordListActionCreator,
  emptySelectedWordListActionCreator,
  resetStateActionCreator,
  changeSearchKeyWordActionCreator,
  changeDisplayedWordListActionCreator,
  toggleWordFormErrorActionCreator,
} from '../../src/actions'; 
import { SORT_ORDER } from '../../src/enums';
import { 
  wordNameUpdateNormState, 
  //newDefAddedNormState, 
  defRemovedNormState, 
  defPosUpdateNormState,
  defTextUpdateNormState,
  defImageUpdateNormState,
  //defUpdateNormState, 
  normalizedSortAscState, 
  normalizedSortDescState, 
  normalizedSortDateNewerState, 
  normalizedSortDateOlderState 
} from '../storage/state';
import { addNewWordActionInputTestData, addNewDefActionInputTestData, addNewWordActionOutputTestData } from '../storage/actions/addNewWordAction';
import { removeWordActionInputTestData, removeWordActionOutputTestData } from '../storage/actions/removeWordAction';
import { 
  addNewDefActionOutputData,
  addNewDefActionInputData
} from '../storage/reducers/addNewDefAction';
import { 
  normalizedFilterNounState, 
  normalizedFilterVerbState, 
  normalizedFilterAdjuctiveState, 
  normalizedFilterAdverbState, 
  normalizedFilterPronounState, 
  normalizedFilterPrepositionState, 
  normalizedFilterInterjectionState, 
  normalizedFilterConjunctionState, 
  normalizedFilterElseState, 
  normalizedFilterIdiomState, 
  normalizedFilterNounElseInterjectionState 
} from '../storage/filter';
import {
  normalizedToggleSelectWarningModalState,
  normalizedToggleDeleteConfirmModalState,
  normalizedToggleSortFilterModalState,
  normalizedToggleSearchWordModalState
} from '../storage/ui';
import {
  normalizedToggleSelectWordState,
  normalizedAddSelectWordState,
  normalizedSelectAllWordState,
  normalizedEmptifyWordState
} from '../storage/selectedWordList';
import { changeSortWrapperThunk, changeFilterWrapperThunk } from '../../src/reducers/thunk';
import store from '../../src/storeConfig';
import { PosEnum } from '../../src/domains/pos';
import { initialNormalizedState } from '../../src/state/index';

//const log = (input: any) => console.log(JSON.stringify(input, null, 2));

describe('reducers: dispatch action and check state has changed as expected', () => {

  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  })

  it('should return initial state', () => {
    const emptyAction: AnyAction = {
      type: "empty_action", 
      input: {},
    } 
    
    expect(rootReducer(undefined, emptyAction)).toEqual(normalizedState)
  })

  it('should return new state (added new word)', () => {
    expect(rootReducer(undefined, addNewWordActionCreator(addNewWordActionInputTestData, addNewDefActionInputTestData))).toEqual(addNewWordActionOutputTestData)
  })

  it('should return new state (removed a particular word)', () => {
    expect(rootReducer(undefined, removeWordActionCreator(removeWordActionInputTestData))).toEqual(removeWordActionOutputTestData)
  })

  it('should return new state (updated word name of a particular word )', () => {
    expect(rootReducer(undefined, updateWordNameActionCreator("0", "test"))).toEqual(wordNameUpdateNormState)
  })

  it('should return new state (added new def to a particular word)', () => {
    // wordId = 4 from test data file
    expect(rootReducer(undefined, addNewDefActionCreator(addNewDefActionInputData, "4"))).toEqual(addNewDefActionOutputData)
  })

  it('should return new state (removed a particular def)', () => {


    expect(rootReducer(undefined, removeDefActionCreator("0",[ "1" ]))).toEqual(defRemovedNormState)
  })

  it('should return new state (updated pos a particular def)', () => {
    expect(rootReducer(undefined, updateDefPosActionCreator('0', 4))).toEqual(defPosUpdateNormState)
  })

  it('should return new state (updated def text (def) a particular def)', () => {
    expect(rootReducer(undefined, updateDefTextActionCreator('0', "test"))).toEqual(defTextUpdateNormState)
  })

  it('should return new state (updated def image (image) a particular def)', () => {
    expect(rootReducer(undefined, updateDefImageActionCreator('0', "test"))).toEqual(defImageUpdateNormState)
  })
  // thunk -- sort --- 
  it('should return new state (changed sort of wordlist to alpha asc)', () => {
    // this use thunk to call sort change action 
    // thunk is needed because two split state are needed to update ( words and sortedWordList )
    // to test this, need to test thunk and reducers 
    // 1. call dispatch with thunk
    // 2. then get updated state from stor
    // 3. compared with test data
    store.dispatch<any>(changeSortWrapperThunk(SORT_ORDER.ALPHA_ASC))
    // should work fine without <any> since I defined ThunkActionCreator but does not work, so use as last resort
    expect(store.getState()).toEqual(normalizedSortAscState);
  })

  it('should return new state (changed sort of wordlist to alpha desc)', () => {
    store.dispatch<any>(changeSortWrapperThunk(SORT_ORDER.ALPHA_DESC))
    expect(store.getState()).toEqual(normalizedSortDescState);
  })

  it('should return new state (changed sort of wordlist to date newer)', () => {
    store.dispatch<any>(changeSortWrapperThunk(SORT_ORDER.DATE_NEWER))
    expect(store.getState()).toEqual(normalizedSortDateNewerState);
  })

  it('should return new state (changed sort of wordlist to date older)', () => {
    store.dispatch<any>(changeSortWrapperThunk(SORT_ORDER.DATE_OLDER))
    expect(store.getState()).toEqual(normalizedSortDateOlderState);
  })

  /**
   * thunk -- filter -- 
   * currentSort state come from previous test case so it should be 4 but this does not matter because it shouldn't affect change of sort to change of filter vice versa so just leave it alone
   **/
  it('should return new state (changed filter of wordlist to only noun)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.NOUN ]))
    expect(store.getState()).toEqual(normalizedFilterNounState);
  })
  
  it('should return new state (changed filter of wordlist to only verb)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.VERB ]))
    expect(store.getState()).toEqual(normalizedFilterVerbState);
  })

  it('should return new state (changed filter of wordlist to only adjuctive)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.ADJUCTIVE ]))
    expect(store.getState()).toEqual(normalizedFilterAdjuctiveState);
  })
  
  it('should return new state (changed filter of wordlist to only advrb)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.ADVERB ]))
    expect(store.getState()).toEqual(normalizedFilterAdverbState);
  })

  it('should return new state (changed filter of wordlist to only pronoun)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.PRONOUN ]))
    expect(store.getState()).toEqual(normalizedFilterPronounState);
  })
  
  it('should return new state (changed filter of wordlist to only conjunction)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.CONJUNCTION ]))
    expect(store.getState()).toEqual(normalizedFilterConjunctionState);
  })

  it('should return new state (changed filter of wordlist to only interjection)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.INTERJECTION ]))
    expect(store.getState()).toEqual(normalizedFilterInterjectionState);
  })
  
  it('should return new state (changed filter of wordlist to only preposition)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.PREPOSITION ]))
    expect(store.getState()).toEqual(normalizedFilterPrepositionState);
  })

  it('should return new state (changed filter of wordlist to only else)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.ELSE ]))
    expect(store.getState()).toEqual(normalizedFilterElseState);
  })
  
  it('should return new state (changed filter of wordlist to only idiom)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.IDIOM ]))
    expect(store.getState()).toEqual(normalizedFilterIdiomState);
  })

  // filter some combination (random)
  it('should return new state (changed filter of wordlist to noun, else, interjection)', () => {
    store.dispatch<any>(changeFilterWrapperThunk([ PosEnum.NOUN, PosEnum.ELSE, PosEnum.INTERJECTION ]))
    expect(store.getState()).toEqual(normalizedFilterNounElseInterjectionState);
  })

})

describe('rootReducer UI state test', () => {
  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  })
  // ui toggle modal
  it('should return new state (changed ui.isSelectWarningModalOpen to true', () => {
    expect(rootReducer(undefined, toggleSelectWarningModalActionCreator(true))).toEqual(normalizedToggleSelectWarningModalState)
  })

  it('should return new state (changed ui.isDeleteConfirmModalOpen to true', () => {
    expect(rootReducer(undefined, toggleDeleteConfirmModalActionCreator(true))).toEqual(normalizedToggleDeleteConfirmModalState)
  })

  it('should return new state (changed ui.isSortFilterModalOpen to true', () => {
    expect(rootReducer(undefined, toggleSortFilterModalActionCreator(true))).toEqual(normalizedToggleSortFilterModalState)
  })

  it('should return new state (changed ui.isSearchWordModalOpen to true', () => {
    expect(rootReducer(undefined, toggleSearchWordModalActionCreator(true))).toEqual(normalizedToggleSearchWordModalState)
  })
})
// initial normalized state
//{
  //entities: {
    //defs: normalizedEntities.entities.defs,
    //words: normalizedEntities.entities.words,
  //},
  //currentSort: 1, 
  //sortedWordList: [0,1,2,3,4,5,6,7,8,9,10],
  //selectedWordList: [0,1,2,3],
  //currentFilter: [0,1,2,3,4,5,6,7,8,9],
  //ui: {
    //isSelectWarningModalOpen: false,
    //isDeleteConfirmModalOpen: false,
    //isSortFilterModalOpen: false,
    //isSearchWordModalOpen: false,
  //},
//}

describe('selectedWordList state (single word)', () => {
  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  })

  it('should return new state (added word id (=1) to selectedWordList state)', () => {
    expect(rootReducer(undefined, toggleSelectedWordListActionCreator("1"))).toEqual(normalizedToggleSelectWordState)
  })

  it('should return new state (added word id (=1) to selectedWordList state)', () => {
    // id must be new id which does not exist in selectedWordList
    expect(rootReducer(undefined, toggleSelectedWordListActionCreator("10"))).toEqual(normalizedAddSelectWordState)
  })

  it('should return new state (case A: select all of sortedWordList to selectedWordList state)', () => {
    // since initial selectedWordList includes some values ( 0,1,2,3 ) so normalizedSelelctAllWordState's selectedWordList must return all values of sortedWordList 
    expect(rootReducer(undefined, selectAllSelectedWordListActionCreator(["0","1","2","3","4","5","6","7","8","9","10"]))).toEqual(normalizedSelectAllWordState)
  })

  it('should return new state (case B: emptify selectedWordList state)', () => {

    // emptify selectedWordList 
    store.dispatch(emptySelectedWordListActionCreator());
    
    // dispatch -> action -> reducer -> store 
    // rootReducer just return new state so it means does not affect store.getState() 
    expect(store.getState().selectedWordList).toEqual(normalizedEmptifyWordState.selectedWordList)
  })
})

describe('sortedWordList state', () => {
  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  })

  it('should return new state ( changeSortActionCreator change sortedWordList to empty array )', () => {
    // currentSort values does not matter
    expect(rootReducer(undefined, changeSortActionCreator(3, [])).sortedWordList).toEqual([])
  })

  it('should return new state ( changeFilterActionCreator change sortedWordList to empty array )', () => {
    // currentFilter values does not matter
    expect(rootReducer(undefined, changeFilterActionCreator([1,2,3], [])).sortedWordList).toEqual([])
  })
})

describe('displayedWordList state', () => {
  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  })

  it('should return new state ( change displayedWordList to empty array', () => {
    expect(rootReducer(undefined, changeDisplayedWordListActionCreator([])).displayedWordList).toEqual([])
  })

  it('should return new state ( change displayedWordList to ramdom values array', () => {
    expect(rootReducer(undefined, changeDisplayedWordListActionCreator(["1","2","3","4"])).displayedWordList).toEqual(["1","2","3","4"])
  })
})

describe('searchKeyWord state', () => {
  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  })

  it('should return new state ( change search keyword )', () => {
    expect(rootReducer(undefined, changeSearchKeyWordActionCreator('test', [])).searchKeyWord).toEqual('test')
  })

  it('should return new state ( change search keyword )', () => {
    expect(rootReducer(undefined, changeSearchKeyWordActionCreator('test', [])).searchKeyWord).toEqual('test')
  })

})

describe('wordFormError state', () => {
  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  })
  // ui toggle modal
  it('should return new state (changed wordFormError to true', () => {
    expect(rootReducer(undefined, toggleWordFormErrorActionCreator(true)).wordFormError).toEqual(true)
  })
})

describe('reset state to initial state ', () => {
  beforeEach(() => {
    store.dispatch(resetStateActionCreator());
  })

  it('should return new state (initial state)', () => {
    expect(rootReducer(undefined, resetStateActionCreator())).toEqual(initialNormalizedState)
  })

})
