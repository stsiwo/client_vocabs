import makeGetWordListItemSelector from '../../src/containers/reselects/makeGetWordListItemSelector';
import { initialStateRecordFactory } from '../storage/state/initialState'; 
import { Record } from 'immutable';
import { IState } from '../../src/state/type';
import { IWordListItem } from '../../src/domains/word';

describe('reselects/makeGetWordListItemSelector', () => {

  const initialStateRecord: Record<IState> = initialStateRecordFactory(); 

  it('should return IWordListItem', () => {
    const getGetWordListItemSelector = makeGetWordListItemSelector();

    const propsDummy: { wordId: string; } = {
      wordId: "1",
    }

    const wordListItem = getGetWordListItemSelector(initialStateRecord, propsDummy); 

    const expectedWordListItem: IWordListItem = {
      id: propsDummy.wordId,
      name: "hypothesis",
      isChecked: true,
    }

    expect( wordListItem ).toEqual(expectedWordListItem);
  })
});


