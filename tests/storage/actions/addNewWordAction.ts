import { IEntityWord } from '../../../src/state/type';
// "wordId" from thunk/addnewWordForm.spec.tsx 
export const addNewWordActionTestData: IEntityWord = {
  wordId: {
    id: "wordId",
    name: "",
    createDate: "now",
    defs: ["defId"]
  }
}

