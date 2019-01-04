import { IDef } from './def';

export interface IWord {
  id: number;
  name: string;
  defs: IDef[];
  createDate: string;
}

export interface INormalizedWord {
  id: number;
  name: string;
  defs: number[];
  createDate: string;
}
