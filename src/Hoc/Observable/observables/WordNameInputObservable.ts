import AbstractObservable from '../AbstractObservable';
import getVocabsApiUrl from '../../../util/getVocabsApiUrl';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Result } from '../type';
import { of, fromEvent } from 'rxjs';
import CustomRef from '../../../CustomRef';
const debug = require('debug')('WordNameInputObservable');

class WordNameInputObservable extends AbstractObservable { 

  private apiUrl: string;

  constructor( targetRef: CustomRef ) {
    super( targetRef );
    this.observable = fromEvent( targetRef.node, 'change' );
    this.apiUrl = getVocabsApiUrl();
  }

  getSubscription( callback: ( nextResult: Result[] ) => void ) {
    return this.observable  
      .pipe(
        filter(( event: Event ) => { 
          debug(event);
          const target = event.target as HTMLInputElement;
          debug(target.value);
          return target.value !== "";
        }),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(( event: Event ) => {
          const target = event.target as HTMLInputElement;
          const keyWord: string = target.value as string;
          return ajax.getJSON(`${ this.apiUrl }/dictionary?keyWord=${ keyWord }`)
            .pipe(
              // this is for ajax error if getJson fails
              catchError(( error: Error ) => of(`error: ${ error }`)) 
            )
        }),
        map(( response: { suggestionList: Result[] }) => response.suggestionList ),
        tap(( suggestionList: Result[] ) => debug( suggestionList )),
      )
      .subscribe(( suggestionList: Result[]) => {
        callback(suggestionList);
      });
  }
}

export default WordNameInputObservable;