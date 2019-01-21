import { SORT_ORDER } from '../enums/index';

/**
 * assign enums value as key 
 * don't use interface, use type
 **/
export type ISort = {
  [x in SORT_ORDER]: boolean; 
}

export const sort: ISort =  {
  [SORT_ORDER.ALPHA_ASC]: false,
  [SORT_ORDER.ALPHA_DESC]: false,
  [SORT_ORDER.DATE_NEWER]: false,
  [SORT_ORDER.DATE_OLDER]: false,
}

