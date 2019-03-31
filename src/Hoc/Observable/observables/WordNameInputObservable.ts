import AbstractObservable from '../AbstractObservable';
import getVocabsApiUrl from '../../../util/getVocabsApiUrl';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Result } from '../type';
import { of, fromEvent } from 'rxjs';
const debug = require('debug')('WordNameInputObservable');

class WordNameInputObservable extends AbstractObservable { 

  private apiUrl: string;

  constructor( targetRef: Node ) {
    super( targetRef );
    this.observable = fromEvent( targetRef, 'change' );
    this.apiUrl = getVocabsApiUrl();
  }

  getSubscription( callback: ( nextResult: Result[] ) => void ) {
    return this.observable  
      .pipe(
        filter(( event: Event ) => { 
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
        }),
        map(( response: { suggestionList: Result[] }) => response.suggestionList ),
        tap(( suggestionList: Result[] ) => debug( suggestionList )),
        catchError(( error: Error ) => of(`error: ${ error }`)), 
      )
      .subscribe(( suggestionList: Result[]) => {
        callback(suggestionList);
      });
  }
}

export default WordNameInputObservable;
