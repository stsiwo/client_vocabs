import AbstractObservable from '../AbstractObservable';
import getVocabsApiUrl from '../../../util/getVocabsApiUrl';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Result } from '../type';
import { of } from 'rxjs';

class WordNameInputObservable extends AbstractObservable {

  private apiUrl: string;

  constructor() {
    super();
    this.apiUrl = getVocabsApiUrl();
  }

  getSubscription( callback: ( nextResult: Result[] ) => void ) {
    return this.observable  
      .pipe(
        filter(( keyWord: string ) => keyWord !== ''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(( keyWord: string ) => ajax.getJSON(`${ this.apiUrl }/dictionary?keyWord=${ keyWord }`)),
        map(( response: { suggestionList: Result[] }) => response.suggestionList ),
        tap(( suggestionList: Result[] ) => console.log( suggestionList )),
        catchError(( error: Error ) => of(`error: ${ error }`)), 
      )
      .subscribe(( suggestionList: Result[]) => {
        callback(suggestionList);
      });
  }
}

export default WordNameInputObservable;
