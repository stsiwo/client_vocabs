import { ISortedWordList, ISelectedWordList, IEntity } from '../state/type';
import { IWordListItem } from '../domains/word';
/**
 * get IWordListItem[] of current State
 **/
export const getWordListItem = (sortedWordList: ISortedWordList, selectedWordList: ISelectedWordList, entities: IEntity): IWordListItem[] =>  {
  const wordListItem: IWordListItem[] = sortedWordList.map(( wordId: string ) => ({
    id: wordId,
    name: entities.words[wordId].name,
    isChecked: selectedWordList.includes(wordId),
  }))
  return wordListItem;
}
