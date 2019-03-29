import * as React from 'react';

export interface ObservableBags {
  input: string;
  result: any; 
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emptyInput: () => void;
  isInputEmpty: () => boolean;
  setInput: ( nextInput: string ) => void;
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
