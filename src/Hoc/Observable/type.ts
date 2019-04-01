import CustomRef from '../../CustomRef';
export interface ObservableBags {
  result: any; 
  targetRef: CustomRef;
  emptyResult: () => void;
  isResultEmpty: () => boolean;
}

export interface Result {
  id: number;
  word: string;
}

export interface ImageResult {
  image: Blob | null;
  path: string;
  alt: string;
}

type ValueOf<T> = T[keyof T];

interface ObservableImplType {
  SearchImageObservable: string;
  WordNameInputObservable: string;
}

export const ObservableImpls: ObservableImplType = {
  SearchImageObservable: "SearchImageObservable", 
  WordNameInputObservable: "WordNameInputObservable" 
}

export type ValueOfObservableImplType = ValueOf<ObservableImplType>;
