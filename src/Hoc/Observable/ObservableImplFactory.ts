import AbstractObservable from './AbstractObservable';
import SearchImageObservable from './observables/SearchImageObservable';
import WordNameInputObservable from './observables/WordNameInputObservable';
import { ObservableImpls, ValueOfObservableImplType } from './type';

type ObservableImplFactoryType = ( implType: ValueOfObservableImplType ) => AbstractObservable;

const ObservableImplFactory: ObservableImplFactoryType = ( implType ) => {
  switch ( implType ) {
    case ObservableImpls.SearchImageObservable:
      return new SearchImageObservable();
      break;
    case ObservableImpls.WordNameInputObservable:
      return new WordNameInputObservable();
      break;
    default:
      return null;
  }
}

export default ObservableImplFactory;



