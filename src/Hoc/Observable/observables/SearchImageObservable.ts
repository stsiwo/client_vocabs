import AbstractObservable from '../AbstractObservable';
import getImageSearchApiUrl from '../../../util/getImageSearchApiUrl'; 
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { Result } from '../type';


class SearchImageObservable extends AbstractObservable {

  constructor() {
    super();
  }

  getSubscription( callback: (nextResult: Result[]) => void ) {
    return this.observable  
      .pipe(
        filter(( keyWord: string ) => keyWord !== ''),
        debounceTime( 500 ),
        distinctUntilChanged(),
        switchMap(( keyWord: string ) => { 
          const apiUrl = getImageSearchApiUrl( keyWord );
          return ajax.getJSON( apiUrl )
        }),
        map(( response: { suggestionList: Result[] }) => response.suggestionList ),
        tap(( suggestionList: Result[] ) => console.log( suggestionList )),
        catchError(( error: Error ) => of(`error: ${ error }`)), 
      )
      .subscribe(( suggestionList: Result[]) => {
        callback(suggestionList);
      });
  }
}

export default SearchImageObservable;
