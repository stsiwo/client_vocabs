import { IDef } from './def';

export interface IWord {
  id: string;
  name: string;
  defs: IDef[];
  createDate: string;
}

export interface INormalizedWord {
  id: string;
  name: string;
  defs: string[];
  createDate: string;
}

/**
 * IWordListItem
 * this interface is for WordListCont to display partial content of word (id, name, isChecked)
 **/
export interface IWordListItem {
  id: string;
  name: string;
  isChecked: boolean;
}
