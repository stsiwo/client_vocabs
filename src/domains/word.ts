import { IDef } from './def';

export interface IWord {
  id: number;
  name: string;
  defs: IDef[];
  createDate: string;
}

