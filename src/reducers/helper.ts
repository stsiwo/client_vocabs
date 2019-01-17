import { StateType } from '../state/type';
import { IWordListItem } from '../domains/word';
/**
 * get IWordListItem[] of current State
 **/
export const getWordListItem = (displayedWordList: StateType.IDisplayedWordList, selectedWordList: StateType.ISelectedWordList, entities: StateType.IEntity): IWordListItem[] =>  {
  const wordListItem: IWordListItem[] = displayedWordList.map(( wordId: string ) => ({
    id: wordId,
    name: entities.words[wordId].name,
    isChecked: selectedWordList.includes(wordId),
  }))
  return wordListItem;
}
