import { WordsActionType } from './type';
import { AnyAction } from 'redux';

export const addNewWordAction: (input: string) => AnyAction = ( input: string ) => ({
  type: WordsActionType.ADD_NEW_WORD,
  input,
});
