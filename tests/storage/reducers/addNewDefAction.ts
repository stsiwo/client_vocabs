import { StateType } from '../../../src/state/type';
import { initialNormalizedState } from '../../../src/state/index';

export const addNewDefActionInputData: StateType.IEntityDef = {
  ["200"]: {
    id: "200",
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
      ["4"]: {
        ...initialNormalizedState.entities.words["4"],
        defs: initialNormalizedState.entities.words["4"].defs.concat(["200"]),
      }
    },
    defs: {
      ...initialNormalizedState.entities.defs,
      ...addNewDefActionInputData,
    }
  }});


