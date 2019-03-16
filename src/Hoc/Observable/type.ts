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

