import { IWord } from '../../src/domains/word';
import { initialWordList } from '../../src/state/index';

export const newWord: IWord = {
  id: "100",
  name: "test-sample-word",
  creationDate: "2002-12-17T03:24:00",
  defs: [
    {
      id: "100",
      pos: 1,
      def: "test-sample-word-def-100",
      image: "image-100",
      wordId: "100",
    },
    {
      id: "101",
      pos: 1,
      def: "test-sample-word-def-101",
      image: "image-100",
      wordId: "100",
    },
    {
      id: "102",
      pos: 1,
      def: "test-sample-word-def-102",
      image: "image-100",
      wordId: "100",
    },
    {
      id: "103",
      pos: 1,
      def: "test-sample-word-def-103",
      image: "image-100",
      wordId: "100",
    },
    {
      id: "104",
      pos: 1,
      def: "test-sample-word-def-104",
      image: "image-100",
      wordId: "100",
    },
  ],
}

export const normalizedNewWord = {
  entities: {
    words: {
      '100': {
        id: "100",
        name: "test-sample-word",
        creationDate: "2002-12-17T03:24:00",
        defs: [ "100", "101", "102", "103", "104" ],
      },
    },
    defs: {
      '100': {
        id: "100",
        pos: 1,
        def: "test-sample-word-def-100",
        image: "image-100",
        wordId: "100",
      },
      '101': {
        id: "101",
        pos: 1,
        def: "test-sample-word-def-101",
        image: "image-100",
        wordId: "100",
      },
      '102': {
        id: "102",
        pos: 1,
        def: "test-sample-word-def-102",
        image: "image-100",
        wordId: "100",
      },
      '103': {
        id: "103",
        pos: 1,
        def: "test-sample-word-def-103",
        image: "image-100",
        wordId: "100",
      },
      '104': {
        id: "104",
        pos: 1,
        def: "test-sample-word-def-104",
        image: "image-100",
        wordId: "100",
      },
    },
  },
}




export const removedWord: IWord[] = initialWordList.filter(( word ) => word.id !== "1" );
// need to copy defs array inside word object. above code just do shallow copy; array is still refers to original array
const updateWordsCopy = JSON.parse(JSON.stringify(initialWordList.filter(( word ) => word.id === "0" )[0]));
updateWordsCopy.name = "test";

export const updateWord: IWord = Object.assign({}, updateWordsCopy );


