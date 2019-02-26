import { StateType } from '../../../src/state/type';
import { initialNormalizedState } from '../../../src/state/index';
// "wordId" from thunk/addnewWordForm.spec.tsx 
export const addNewWordActionInputTestData: StateType.IEntityWord = {
  wordId: {
    id: "wordId",
    name: "",
    createDate: "now",
    defs: ["defId"]
  }
}

// "wordId" from thunk/addnewWordForm.spec.tsx 
// "defId" from util/getNewWord
export const addNewDefActionInputTestData: StateType.IEntityDef = {
  defId: {
    id: "defId",
    pos: 1,
    def: "",
    image: "",
    wordId: "wordId",
  }
}

// modal test data
export const addNewWordActionOutputTestData = Object.assign({}, initialNormalizedState, {
  entities: {
    words: {
      ...initialNormalizedState.entities.words,
      ...addNewWordActionInputTestData,
    },
    defs: {
      ...initialNormalizedState.entities.defs,
      ...addNewDefActionInputTestData,
    }
  }});

