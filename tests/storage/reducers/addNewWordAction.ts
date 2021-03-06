import { StateType } from '../../../src/state/type';
import { initialNormalizedState } from '../../../src/state/index';

export const addNewWordActionInputData: StateType.IEntityWord = {
  ["111"]: {
    id: "111",
    name: "test",
    creationDate: "1997-12-17T03:24:00",
    defs: [],
  }
}

export const addNewWordActionOutputData = Object.assign({}, initialNormalizedState, {
  entities: {
    words: {
      ...initialNormalizedState.entities.words,
      ...addNewWordActionInputData,
    },
    defs: {
      ...initialNormalizedState.entities.defs,
    }
  }});

