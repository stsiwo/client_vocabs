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
  abbr: string;
}

export const pos: IPos[] = [
  {
    pos: 'noun',
    value: '0',
    abbr: 'n.',
  },
  {
    pos: 'verb',
    value: '1',
    abbr: 'v.',
  },
  {
    pos: 'adjuctive',
    value: '2',
    abbr: 'adj.',
  },
  {
    pos: 'adverb',
    value: '3',
    abbr: 'adv.',
  },
  {
    pos: 'preposition',
    value: '4',
    abbr: 'prep.',
  },
  {
    pos: 'pronoun',
    value: '5',
    abbr: 'pron.',
  },
  {
    pos: 'conjunction',
    value: '6',
    abbr: 'conj.',
  },
  {
    pos: 'interjection',
    value: '7',
    abbr: 'interj.',
  },
  {
    pos: 'idiom',
    value: '8',
    abbr: 'idiom',
  },
  {
    pos: 'other',
    value: '9',
    abbr: 'other',
  },
];
