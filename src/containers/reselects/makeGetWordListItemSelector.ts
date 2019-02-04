import { createSelector } from 'reselect'
import { getWordInputSelector, isWordIdContainInsideSelectedWordListInputSelector } from './inputSelector';
import { IWordImm } from '../../domains/word';

/**
 * does not want to use selectedWordList since every time user check word item, its state changes
 * which means input-selector's output also change,
 * which means memorization does not work at all
 **/
const makeGetWordListItemSelector = () => {
  return createSelector(
    [ getWordInputSelector, isWordIdContainInsideSelectedWordListInputSelector ],
    ( word: IWordImm, isWordIdContainInsideSelectedWordList: boolean ) => {
      return {
        id: word.get('id'),
        name: word.get('name'), 
        isChecked: isWordIdContainInsideSelectedWordList, 
      }
    }
  )
}
export default makeGetWordListItemSelector;
