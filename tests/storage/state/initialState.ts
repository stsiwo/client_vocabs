import { IWord, IWordImm } from '../../../src/domains/word';
import { IState, StateType } from '../../../src/state/type';
import { PosEnum } from '../../../src/domains/pos';
import { Record, OrderedSet, Map, fromJS, Set } from 'immutable';

export const initialWordList: IWord[] = [
  {
    id: "2",
    name: "address",
    createDate: "1997-12-17T03:24:00",
    defs: [
      {
        id: "8",
        pos: PosEnum.ADJUCTIVE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "2",
      },
    ],
  },
  {
    id: "10",
    name: "biblical",
    createDate: "2005-12-17T03:24:00",
    defs: [
      {
        id: "110",
        pos: PosEnum.NOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "10",
      },
    ],
  },
  {
    id: "4",
    name: "curry",
    createDate: "1999-12-17T03:24:00",
    defs: [
      {
        id: "14",
        pos: PosEnum.PRONOUN,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "4",
      },
    ],
  },
  {
    id: "7",
    name: "dictation",
    createDate: "2002-12-17T03:24:00",
    defs: [
      {
        id: "17",
        pos: PosEnum.INTERJECTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "7",
      },
    ],
  },
  {
    id: "5",
    name: "elaborate",
    createDate: "2000-12-17T03:24:00",
    defs: [
      {
        id: "15",
        pos: PosEnum.PREPOSITION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "5",
      },
    ],
  },
  {
    id: "1",
    name: "hypothesis",
    createDate: "1996-12-17T03:24:00",
    defs: [
      {
        id: "4",
        pos: PosEnum.VERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "1",
      },
      {
        id: "5",
        pos: PosEnum.VERB,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        _wordId: "1",
      },
      {
        id: "6",
        pos: PosEnum.VERB,
        def: "a formal speech:",
        image: "image1",
        _wordId: "1",
      },
      {
        id: "7",
        pos: PosEnum.VERB,
        def: "to speak or write to someone:",
        image: "image1",
        _wordId: "1",
      },
    ],
  },
  {
    id: "3",
    name: "longevity",
    createDate: "1998-12-17T03:24:00",
    defs: [
      {
        id: "13",
        pos: PosEnum.ADVERB,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "3",
      },
    ],
  },
  {
    id: "8",
    name: "occupation",
    createDate: "2003-12-17T03:24:00",
    defs: [
      {
        id: "18",
        pos: PosEnum.ELSE,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "8",
      },
    ],
  },
  {
    id: "0",
    name: "sport",
    createDate: "1995-12-17T03:24:00",
    defs: [
      {
        id: "0",
        pos: PosEnum.NOUN, 
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "0",
      },
      {
        id: "1",
        pos: PosEnum.NOUN,
        def: "a series of letters and symbols that tell you where to find something on the internet or show where an email is sent to:",
        image: "image1",
        _wordId: "0",
      },
      {
        id: "2",
        pos: PosEnum.NOUN,
        def: "a formal speech:",
        image: "image1",
        _wordId: "0",
      },
      {
        id: "3",
        pos: PosEnum.NOUN,
        def: "to speak or write to someone:",
        image: "image1",
        _wordId: "0",
      },
    ],
  },
  {
    id: "9",
    name: "valt",
    createDate: "2004-12-17T03:24:00",
    defs: [
      {
        id: "19",
        pos: PosEnum.IDIOM,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "9",
      },
    ],
  },
  {
    id: "6",
    name: "zap",
    createDate: "2001-12-17T03:24:00",
    defs: [
      {
        id: "16",
        pos: PosEnum.CONJUNCTION,
        def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be sent:",
        image: "image1",
        _wordId: "6",
      },
    ],
  },
];

export const initialWordListJson = JSON.stringify(initialWordList);

export const initialWordListImm = fromJS(initialWordList);

const initialEntityWord: StateType.IEntityWord = Map<string, IWordImm>();

const initialEntityWordWithData = initialEntityWord.withMutations(( mutable ) => initialWordList.forEach(( word: IWord ) => {
  mutable.set( word.id, fromJS( word ))
})); 


export const initialState: IState = {
  entities: Record<StateType.IEntity>({
    words: initialEntityWordWithData, 
  })(),
  currentSort: 1, 
  sortedWordList: OrderedSet<string>(),
  searchedWordList: OrderedSet<string>(),
  selectedWordList: OrderedSet<string>(["0","1","2","3","4"]),
  displayedWordList: OrderedSet<string>(["0","1","2","3","4","5","6","7","8","9","10"]), 
  searchKeyWord: '',
  currentFilter: Set<number>([0,1,2,3,4,5,6,7,8,9]),
  wordFormError: false,
  ui: Record<StateType.IUi>({
    isSelectWarningModalOpen: false,
    isDeleteConfirmModalOpen: false,
    isSortFilterModalOpen: false,
    isSearchWordModalOpen: false,
    isDefineWarningModalOpen: false,
  })(),
  asyncs: Record<StateType.IAsyncs>({
    isInitialWordsFetching: false,
  })(),
}

export const initialStateRecordFactory = Record(initialState); 


