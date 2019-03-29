import * as React from 'react';

export interface ObservableBags {
  input: string;
  result: Result[];
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emptyInput: () => void;
  isInputEmpty: () => boolean;
}

export interface Result {
  id: number;
  word: string;
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
