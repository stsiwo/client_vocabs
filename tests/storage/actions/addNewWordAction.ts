import { StateType } from '../../../src/state/type';
// "wordId" from thunk/addnewWordForm.spec.tsx 
export const addNewWordActionTestData: StateType.IEntityWord = {
  wordId: {
    id: "wordId",
    name: "",
    createDate: "now",
    defs: ["defId"]
  }
}

