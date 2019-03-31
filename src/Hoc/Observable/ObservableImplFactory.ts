import AbstractObservable from './AbstractObservable';
import SearchImageObservable from './observables/SearchImageObservable';
import WordNameInputObservable from './observables/WordNameInputObservable';
import { ObservableImpls, ValueOfObservableImplType } from './type';

type ObservableImplFactoryType = ( implType: ValueOfObservableImplType, targetRef: Node ) => AbstractObservable;

const ObservableImplFactory: ObservableImplFactoryType = ( implType, targetRef ) => {
  switch ( implType ) {
    case ObservableImpls.SearchImageObservable:
      return new SearchImageObservable( targetRef );
      break;
    case ObservableImpls.WordNameInputObservable:
      return new WordNameInputObservable( targetRef );
      break;
    default:
      return null;
  }
}

export default ObservableImplFactory;



