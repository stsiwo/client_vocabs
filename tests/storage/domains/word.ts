import { IWordListItem } from '../../../src/domains/word';
import { List } from 'immutable';

// this data is based on storage/state/initialState.ts
export const wordItemListOutputDataImm = List<IWordListItem>([
  {
    "id": "0",
    "isChecked": true,
    "name": "address",
  },
  {
    "id": "1",
    "isChecked": true,
    "name": "biblical",
  },
  {
    "id": "2",
    "isChecked": true,
    "name": "curry",
  },
  {
    "id": "3",
    "isChecked": true,
    "name": "dictation",
  },
  {
    "id": "4",
    "isChecked": true,
    "name": "elaborate",
  },
  {
    "id": "5",
    "isChecked": false,
    "name": "hypothesis",
  },
  {
    "id": "6",
    "isChecked": false,
    "name": "longevity",
  },
  {
    "id": "7",
    "isChecked": false,
    "name": "occupation",
  },
  {
    "id": "8",
    "isChecked": false,
    "name": "sport",
  },
  {
    "id": "9",
    "isChecked": false,
    "name": "valt",
  },
  {
    "id": "10",
    "isChecked": false,
    "name": "zap",
  },
]);

export const wordItemListOutputDataJS = [
  {
    "id": "0",
    "isChecked": true,
    "name": "address",
  },
  {
    "id": "1",
    "isChecked": true,
    "name": "biblical",
  },
  {
    "id": "2",
    "isChecked": true,
    "name": "curry",
  },
  {
    "id": "3",
    "isChecked": true,
    "name": "dictation",
  },
  {
    "id": "4",
    "isChecked": true,
    "name": "elaborate",
  },
  {
    "id": "5",
    "isChecked": false,
    "name": "hypothesis",
  },
  {
    "id": "6",
    "isChecked": false,
    "name": "longevity",
  },
  {
    "id": "7",
    "isChecked": false,
    "name": "occupation",
  },
  {
    "id": "8",
    "isChecked": false,
    "name": "sport",
  },
  {
    "id": "9",
    "isChecked": false,
    "name": "valt",
  },
  {
    "id": "10",
    "isChecked": false,
    "name": "zap",
  },
];
//import { IWord } from '../../../src/domains/word';
////import { normalizeWords } from '../../../src/state/index';
//import { PosEnum } from '../../../src/domains/pos';
//import { StateType } from '../../../src/state/type';
/*
 * test words data: IWord[]
 *  - mixing new words and existing modified words
 */
//export const wordsTestData: IWord[] = [
  //{
    //id: "10",
    //name: "biblical",
    //createDate: "2005-12-17T03:24:00",
    //defs: [
      //{
        //id: "110",
        //pos: PosEnum.NOUN,
        //def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        //image: "image1",
        //_wordId: "10",
      //},
    //],
  //},
  //{
    //id: "22222",
    //name: "new word",
    //createDate: "2005-12-17T03:24:00",
    //defs: [
      //{
        //id: "110",
        //pos: PosEnum.NOUN,
        //def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        //image: "image1",
        //_wordId: "10",
      //},
    //],
  //},
//];

/*
 * normalized words test data: IEntity
 */
//export const normalizedWordsTestData: StateType.IEntity = normalizeWords(wordsTestData);
 
