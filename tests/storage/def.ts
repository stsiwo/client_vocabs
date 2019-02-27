import { IDef } from '../../src/domains/def';
import { IWord } from '../../src/domains/word';
import { initialWordList } from '../../src/state/index';

export const newDef: IDef[] = [ 
  {
    id: "100",
    pos: 1,
    def: "test-sample-def-def-100",
    image: "image-100",
    wordId: "0",
  },
  {
    id: "101",
    pos: 1,
    def: "test-sample-def-def-101",
    image: "image-100",
    wordId: "0",
  },
  {
    id: "102",
    pos: 1,
    def: "test-sample-def-def-102",
    image: "image-100",
    wordId: "0",
  },
  {
    id: "103",
    pos: 1,
    def: "test-sample-def-def-103",
    image: "image-100",
    wordId: "0",
  },
  {
    id: "104",
    pos: 1,
    def: "test-sample-def-def-104",
    image: "image-100",
    wordId: "0",
  },
]

// remove def whose id = 1 of word id = 0
const copyInitialState = JSON.parse(JSON.stringify(initialWordList));
// find word whose id = 0
const wordId0Index = copyInitialState.findIndex(( word: IWord ) => word.id === "0");
copyInitialState[wordId0Index].defs.splice(1,1);
export const removedDef: IWord[] = copyInitialState;
// need to copy defs array inside def object. above code just do shallow copy; array is still refers to original array
const updateWordCopy = JSON.parse(JSON.stringify(initialWordList[0]));
updateWordCopy.defs[0].def = "update";
updateWordCopy.defs[0].image = "update-image";

export const updateDef: IDef[] = Object.assign({}, updateWordCopy.defs );



