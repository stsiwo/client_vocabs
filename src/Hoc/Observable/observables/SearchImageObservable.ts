import AbstractObservable from '../AbstractObservable';
import getImageSearchApiUrl from '../../../util/getImageSearchApiUrl'; 
import { of, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { ImageResult } from '../type';
const debug = require('debug')("SearchImageObservable");


class SearchImageObservable extends AbstractObservable {

  constructor( targetRef: Node) {
    super(targetRef);
    this.observable = fromEvent( targetRef, 'click' );
  }

  getSubscription( callback: ( nextResult: ImageResult[] ) => void ) {
    return this.observable
      .pipe(
        filter(( event: Event) => {
          const target = event.target as HTMLInputElement;
          debug('inside filter of obsrvable');
          return target.value !== "";
        }),
        debounceTime( 500 ),
        distinctUntilChanged(),
        switchMap(( event: Event ) => { 
          const target = event.target as HTMLInputElement;
          const keyWord: string = target.value as string;
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
