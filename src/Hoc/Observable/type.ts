import * as React from 'react';

export interface ObservableBags {
  input: string;
  result: Result[];
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Result {
  id: number;
  word: string;
}

