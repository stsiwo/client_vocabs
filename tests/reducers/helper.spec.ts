import { getWordListItem } from '../../src/reducers/helper';
import { StateType, IState } from '../../src/state/type';
import { Record, List } from 'immutable';
import { initialStateRecordFactory } from '../storage/state/initialState';
import { IWordListItem } from '../../src/domains/word';
import { wordItemListOutputData } from '../storage/domains/word'; 

describe('reducers/helper', () => {
  it('getWordListItem: should return List<IWordListItem>', () => {
    const initialStateRecord: Record<IState> = initialStateRecordFactory();
    const displayedWordList: StateType.IDisplayedWordList = initialStateRecord.get('displayedWordList'); 
    const selectedWordList: StateType.ISelectedWordList = initialStateRecord.get('selectedWordList');
    const entities: Record<StateType.IEntity> = initialStateRecord.get('entities');

    expect(getWordListItem(displayedWordList, selectedWordList, entities )).toEqual(List<IWordListItem>(wordItemListOutputData));
  })
});

