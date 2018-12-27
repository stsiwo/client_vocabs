import { WordsActionType } from './type';
import { AnyAction } from 'redux';
import { IWord } from '../domains/word';

export const addNewWordAction: (input: IWord) => AnyAction = ( input: IWord ) => ({
  type: WordsActionType.ADD_NEW_WORD,
  input,
});
