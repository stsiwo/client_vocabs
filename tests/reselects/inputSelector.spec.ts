import { initialStateRecordFactory } from '../storage/state/initialState'; 
import { getWordInputSelector, getSelectedWordListInputSelector } from '../../src/containers/reselects/inputSelector';
import { Record } from 'immutable';
import { IState } from '../../src/state/type';
import { initialWordListImm } from '../storage/state/initialState';

/**
 * test data is based on storage/state/initialState
 **/
describe('reselects/inputSelector#getWordInputSelector', () => {

  const initialStateRecord: Record<IState> = initialStateRecordFactory(); 

  it('should return IWord', () => {

    const propsDummy: { wordId: string; } = {
      wordId: "1",
    }
    console.log(initialStateRecord.getIn([ 'entities', 'words', 1 ]));

    expect(getWordInputSelector(initialStateRecord, propsDummy)).toEqual(initialWordListImm.find(( wordMap: Map<string, any> ) => wordMap.get("id") === propsDummy.wordId));
  })
});

describe('reselects/inputSelector#getSelectedWordListInputSelector', () => {

  const initialStateRecord: Record<IState> = initialStateRecordFactory(); 

  it('should return OrderedSet<string>', () => {

    expect(getSelectedWordListInputSelector(initialStateRecord)).toEqual(initialStateRecord.get('selectedWordList'));
  })
});



