import AbstractObservable from './AbstractObservable';
import SearchImageObservable from './observables/SearchImageObservable';
import WordNameInputObservable from './observables/WordNameInputObservable';
import { ObservableImpls, ValueOfObservableImplType } from './type';
import CustomRef from '../../CustomRef';

type ObservableImplFactoryType = ( implType: ValueOfObservableImplType, targetRef: CustomRef ) => AbstractObservable;

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



