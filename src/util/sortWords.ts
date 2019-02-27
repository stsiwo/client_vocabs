import { getWordNameList } from '../reducers/helper'; 
import { StateType } from '../state/type';
import { IWordNameList } from '../domains/word';
import { Record, OrderedSet } from 'immutable';
import { SORT_ORDER } from '../enums/index';

const sortWords = (sortedWordList: StateType.ISortedWordList, entities: Record<StateType.IEntity>, newSort: number): StateType.ISortedWordList => {

  // get word list item from sortedWordList and entities
  const wordListItem: OrderedSet<IWordNameList> = getWordNameList(sortedWordList, entities);

  // sort 
  const sortedItem = wordListItem.sort(sortHandlers[ newSort ]);

  // extract only id and return 
  return OrderedSet<string>(sortedItem.map(( wordItem ) => wordItem.id ));
}
export default sortWords;

type CompareFunctionType = (a: IWordNameList, b: IWordNameList) => number;
// key must be enum of SORT_ORDER to map it to compare hander function
interface ISortHandler {
  [P: number]: CompareFunctionType;
}

// might need to refactor to implement more efficient sorting algorithm (Schwartzian transform)
const sortHandlers: ISortHandler = {
  [SORT_ORDER.ALPHA_ASC]: (first_word, second_word) => {
    const nameA = first_word.name.toUpperCase(); // ignore upper and lowercase
    const nameB = second_word.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  },
  [SORT_ORDER.ALPHA_DESC]: (first_word, second_word) => {
    const nameA = first_word.name.toUpperCase(); // ignore upper and lowercase
    const nameB = second_word.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  },
  [SORT_ORDER.DATE_NEWER]: (first_word, second_word) => {
    return +new Date(second_word.creationDate) - +new Date(first_word.creationDate);
  },
  [SORT_ORDER.DATE_OLDER]: (first_word, second_word) => {
    return +new Date(first_word.creationDate) - +new Date(second_word.creationDate);
  },
}



  
