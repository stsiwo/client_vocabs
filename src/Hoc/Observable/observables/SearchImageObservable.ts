import AbstractObservable from '../AbstractObservable';
import getImageSearchApiUrl from '../../../util/getImageSearchApiUrl'; 
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { ImageResult } from '../type';
const debug = require('debug')(__filename);


class SearchImageObservable extends AbstractObservable {

  constructor() {
    super();
  }

  getSubscription( callback: ( nextResult: ImageResult[] ) => void ) {
    return this.observable  
      .pipe(
        filter(( keyWord: string ) => keyWord !== ''),
        debounceTime( 500 ),
        distinctUntilChanged(),
        switchMap(( keyWord: string ) => { 
          const apiUrl = getImageSearchApiUrl( keyWord );
          return ajax.getJSON( apiUrl )
        }),
        map(( response: any ) => { 
          debug(response);
          return response.items.map(( item: any ) => ({
            image: null,
            path: item.link,
            alt: item.title
          } as ImageResult));
        }),
        tap(( imageResult: ImageResult[] ) => debug( imageResult )),
        catchError(( error: Error ) => of(`error: ${ error }`)), 
      )
      .subscribe(( imageResult: ImageResult[]) => {
        callback(imageResult);
      });
  }
}

export default SearchImageObservable;
