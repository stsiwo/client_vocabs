import { PosEnum } from './pos'; 

export type IFilter = {
  [x in PosEnum]: boolean;
}

export const filter: IFilter = {
  [PosEnum.NOUN]: false,
  [PosEnum.VERB]: false,
  [PosEnum.ADJUCTIVE]: false,
  [PosEnum.ADVERB]: false,
  [PosEnum.PREPOSITION]: false,
  [PosEnum.PRONOUN]: false,
  [PosEnum.CONJUNCTION]: false,
  [PosEnum.INTERJECTION]: false,
  [PosEnum.IDIOM]: false,
  [PosEnum.ELSE]: false,
}
