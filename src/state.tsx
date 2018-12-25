import { normalize, schema } from 'normalizr';

const defSchema = new schema.Entity('def');
const wordSchema = new schema.Entity('word', { defs: [defSchema] }, { idAttribute: 'name' });
   
const wordListSchema = new schema.Array(wordSchema);
  
enum PosEnum {
  NOUN = 'noun',
  VERB = 'verb',
  ADJUCTIVE = 'adjuctive',
  ADVERB = 'adverb',
  PREPOSITION = 'preposition',
  PRONOUN = 'pronoun',
  CONJUNCTION = 'conjunction',
  INTERJECTION = 'interjection',
  IDIOM = 'idiom',
  ELSE = 'else',
}

interface IPos {
  pos: PosEnum;
  value: number;
}

interface posItem {
  [x: string]: IPos;
}

const Pos: posItem = {
  [PosEnum.NOUN]: {
    pos: PosEnum.NOUN,
    value: 0,
  },
  [PosEnum.VERB]: {
    pos: PosEnum.VERB,
    value: 1,
  },
  [PosEnum.ADJUCTIVE]: {
    pos: PosEnum.ADJUCTIVE,
    value: 2,
  },
  [PosEnum.ADVERB]: {
    pos: PosEnum.ADVERB,
    value: 3,
  },
  [PosEnum.PREPOSITION]: {
    pos: PosEnum.PREPOSITION,
    value: 4,
  },
  [PosEnum.PRONOUN]: {
    pos: PosEnum.PRONOUN,
    value: 5,
  },
  [PosEnum.CONJUNCTION]: {
    pos: PosEnum.CONJUNCTION,
    value: 6,
  },
  [PosEnum.INTERJECTION]: {
    pos: PosEnum.INTERJECTION,
    value: 7,
  },
  [PosEnum.IDIOM]: {
    pos: PosEnum.IDIOM,
    value: 8,
  },
  [PosEnum.ELSE]: {
    pos: PosEnum.ELSE,
    value: 9,
  },
}

interface IWord {
  name: string;
  defs: IDef[];
}

interface IDef {
  id: number;
  pos: IPos;
  def: string;
  image: string;
}

export type State = IWord[];

export interface normalizedState {
  entities: {
    word: IWord,
    def: IDef,
  },
  result: {
    words: IWord[],
  }
}

export const initialState: State = [
  {
    name: "address",
    defs: [
      {
        id: 0,
        pos: Pos[PosEnum.NOUN],
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
      },
      {
        id: 1,
        pos: Pos[PosEnum.NOUN],
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
      },
      {
        id: 2,
        pos: Pos[PosEnum.NOUN],
        def: "a formal speech:",
        image: "image1",
      },
      {
        id: 3,
        pos: Pos[PosEnum.VERB],
        def: "to speak or write to someone:",
        image: "image1",
      },
    ],
  }
];

let normalizedData = normalize(initialState, wordListSchema);
normalizedData = { 
  entities: normalizedData.entities,
  words: normalizedData.result.words,
}

export const normalizedInitialState: normalizedState = normalizedData; 

console.log(normalizedData);
