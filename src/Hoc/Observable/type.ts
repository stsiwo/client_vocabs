import * as React from 'react';

export interface ObservableBags {
  input: string;
  result: Result[];
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  renderAutoComplete: ( onClickHandler: (e: React.MouseEvent<HTMLLIElement>) => void ) => React.ReactNode;
  isAutoCompleteActive: () => boolean;
  closeAutoComplete: () => void;
  autoCompleteRef: React.RefObject<HTMLUListElement>;
}

export interface Result {
  id: number;
  word: string;
}

