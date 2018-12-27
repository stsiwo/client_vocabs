import { normalize, schema } from 'normalizr';
import { PosEnum, Pos } from './domains/pos';
import { IWord } from './domains/word';
import { IDef } from './domains/def';

const defSchema = new schema.Entity('defs');
const wordSchema = new schema.Entity('words', { defs: [defSchema] });
   
export const wordListSchema = new schema.Array(wordSchema);

export type State = IWord[];

export interface IEntityDef {
  [id: number]: IDef;
}

export interface IEntityWord {
  [id: number]: IWord;
}

export interface IEntity {
  words: IEntityWord,
  defs: IEntityDef,
}

export interface INormalizedState {
  entities: IEntity,
}

export const initialState: State = [
  {
    id: 0,
    name: "address",
    defs: [
      {
        id: 0,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 0,
      },
      {
        id: 1,
        pos: Pos[PosEnum.NOUN],
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        _wordId: 0,
      },
      {
        id: 2,
        pos: Pos[PosEnum.NOUN],
        def: "a formal speech:",
        image: "image1",
        _wordId: 0,
      },
      {
        id: 3,
        pos: Pos[PosEnum.VERB],
        def: "to speak or write to someone:",
        image: "image1",
        _wordId: 0,
      },
    ],
  },
  {
    id: 1,
    name: "test",
    defs: [
      {
        id: 4,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: 1,
      },
      {
        id: 5,
        pos: Pos[PosEnum.NOUN],
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        _wordId: 1,
      },
      {
        id: 6,
        pos: Pos[PosEnum.NOUN],
        def: "a formal speech:",
        image: "image1",
        _wordId: 1,
      },
      {
        id: 7,
        pos: Pos[PosEnum.VERB],
        def: "to speak or write to someone:",
        image: "image1",
        _wordId: 1,
      },
    ],
  }
];

export const normalizeWordsArray: (words: State) => INormalizedState = (words) => {

  const normalizedWords = normalize(words, wordListSchema);
  return {
    entities: normalizedWords.entities,
  }
}

export const normalizeWordObject: (word: IWord) => INormalizedState = (word) => {
  const normalizedWord = normalize(word, wordSchema);
  return {
    entities: normalizedWord.entities,
  }
}

export const normalizedState: INormalizedState = normalizeWordsArray(initialState); 

