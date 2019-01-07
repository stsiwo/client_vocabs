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

/**
 * IWordListItem
 * this interface is for WordListCont to display partial content of word (id, name, isChecked)
 **/
export interface IWordListItem {
  id: number;
  name: string;
  isChecked: boolean;
}
