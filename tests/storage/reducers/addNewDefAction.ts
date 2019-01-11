import { IEntityDef } from '../../../src/state/type';
import { initialNormalizedState } from '../../../src/state/index';

export const addNewDefActionInputData: IEntityDef = {
  ["111"]: {
    id: "14",
    pos: 2,
    def: "test",
    image: "test",
    _wordId: "4",
  }
}

export const addNewDefActionOutputData = Object.assign({}, initialNormalizedState, {
  entities: {
    words: {
      ...initialNormalizedState.entities.words,
    },
    defs: {
      ...initialNormalizedState.entities.defs,
      ...addNewDefActionInputData,
    }
  }});


