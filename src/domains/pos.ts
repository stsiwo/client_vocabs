export enum PosEnum {
  NOUN = 0,
  VERB = 1,
  ADJUCTIVE = 2,
  ADVERB = 3,
  PREPOSITION = 4,
  PRONOUN = 5,
  CONJUNCTION = 6,
  INTERJECTION = 7,
  IDIOM = 8,
  ELSE = 9,
}

export interface IPos {
  pos: string;
  value: string;
}

export const pos: IPos[] = [
  {
    pos: 'noun',
    value: '0',
  },
  {
    pos: 'verb',
    value: '1',
  },
  {
    pos: 'adjuctive',
    value: '2',
  },
  {
    pos: 'adverb',
    value: '3',
  },
  {
    pos: 'preposition',
    value: '4',
  },
  {
    pos: 'pronoun',
    value: '5',
  },
  {
    pos: 'conjunction',
    value: '6',
  },
  {
    pos: 'interjection',
    value: '7',
  },
  {
    pos: 'idiom',
    value: '8',
  },
  {
    pos: 'else',
    value: '9',
  },
];
