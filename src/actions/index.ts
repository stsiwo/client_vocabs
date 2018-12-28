import { WordActionType } from './type';
import { AnyAction } from 'redux';
import { IWord } from '../domains/word';

export const addNewWordAction: (input: IWord) => AnyAction = ( input: IWord ) => ({
  type: WordActionType.ADD_NEW_WORD,
  input,
});
