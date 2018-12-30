import { IDef } from '../../src/domains/def';
import { IWord } from '../../src/domains/word';
import { initialState } from '../../src/state';

export const newDef: IDef[] = [ 
  {
    id: 100,
    pos: 1,
    def: "test-sample-def-def-100",
    image: "image-100",
    _wordId: 0,
  },
  {
    id: 101,
    pos: 1,
    def: "test-sample-def-def-101",
    image: "image-100",
    _wordId: 0,
  },
  {
    id: 102,
    pos: 1,
    def: "test-sample-def-def-102",
    image: "image-100",
    _wordId: 0,
  },
  {
    id: 103,
    pos: 1,
    def: "test-sample-def-def-103",
    image: "image-100",
    _wordId: 0,
  },
  {
    id: 104,
    pos: 1,
    def: "test-sample-def-def-104",
    image: "image-100",
    _wordId: 0,
  },
]

// remove def whose id = 1 of word id = 0
const copyInitialState = JSON.parse(JSON.stringify(initialState));
copyInitialState[0].defs.splice(1,1);
export const removedDef: IWord[] = copyInitialState;
// need to copy defs array inside def object. above code just do shallow copy; array is still refers to original array
const updateWordCopy = JSON.parse(JSON.stringify(initialState[0]));
updateWordCopy.defs[0].def = "update";
updateWordCopy.defs[0].image = "update-image";

export const updateDef: IDef[] = Object.assign({}, updateWordCopy.defs );


