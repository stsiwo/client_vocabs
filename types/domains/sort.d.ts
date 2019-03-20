import { SORT_ORDER } from '../enums/index';
/**
 * assign enums value as key
 * don't use interface, use type
 **/
export declare type ISort = {
    [x in SORT_ORDER]: boolean;
};
export declare const sort: ISort;
