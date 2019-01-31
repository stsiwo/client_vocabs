import { IDef } from './def';
import { List } from 'immutable';

export interface IWord {
  id: string;
  name: string;
  defs: List<IDef>; 
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

/**
 * IWordNameList
 *  - sorting purpose
 * @type {IWordNameList}
 **/
export interface IWordNameList {
  id: string;
  name: string;
}

/**
 * IWordDefsList
 *  - sorting purpose
 * @type {IWordDefsList}
 **/
export interface IWordDefsList {
  id: string;
  defs: List<IDef>;
}
