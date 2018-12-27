export enum PosEnum {
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

export interface IPos {
  pos: PosEnum;
  value: number;
}

interface posItem {
  [x: string]: IPos;
}

export const Pos: posItem = {
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

