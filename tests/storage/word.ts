import { IWord } from '../../src/domains/word';
import { initialState } from '../../src/state';

export const newWord: IWord = {
  id: 100,
  name: "test-sample-word",
  createDate: "2002-12-17T03:24:00",
  defs: [
    {
      id: 100,
      def: "test-sample-word-def-100",
      image: "image-100",
      _wordId: 100,
    },
    {
      id: 101,
      def: "test-sample-word-def-101",
      image: "image-100",
      _wordId: 100,
    },
    {
      id: 102,
      def: "test-sample-word-def-102",
      image: "image-100",
      _wordId: 100,
    },
    {
      id: 103,
      def: "test-sample-word-def-103",
      image: "image-100",
      _wordId: 100,
    },
    {
      id: 104,
      def: "test-sample-word-def-104",
      image: "image-100",
      _wordId: 100,
    },
  ],
}

export const removedWord: IWord[] = initialState.filter(( word ) => word.id !== 1 );
// need to copy defs array inside word object. above code just do shallow copy; array is still refers to original array
const updateWordsCopy = JSON.parse(JSON.stringify(initialState[0]));
updateWordsCopy.name = "update";
updateWordsCopy.defs[0].def = "update";

export const updateWord: IWord = Object.assign({}, updateWordsCopy );


