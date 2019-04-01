import AbstractObservable from '../AbstractObservable';
import getImageSearchApiUrl from '../../../util/getImageSearchApiUrl'; 
import { of, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { ImageResult } from '../type';
import CustomRef from '../../../CustomRef';
const debug = require('debug')("SearchImageObservable");


class SearchImageObservable extends AbstractObservable {

  constructor( targetRef: CustomRef) {
    super(targetRef);
    this.observable = fromEvent( targetRef.node, 'input' );
  }

  getSubscription( callback: ( nextResult: ImageResult[] ) => void ) {
    return this.observable
      .pipe(
        filter(( event: Event ) => {
          debug(event);
          const target = event.target as HTMLInputElement;
          return target.value !== "";
        }),
        debounceTime( 800 ),
        distinctUntilChanged(),
        switchMap(( event: Event ) => { 
          const target = event.target as HTMLInputElement;
          const keyWord: string = target.value as string;
          const apiUrl = getImageSearchApiUrl( keyWord );
          return ajax.getJSON( apiUrl )
            .pipe(
              catchError(( error: Error ) => {
                debug(error);
                return of(`error: ${ error }`)
              }) 
            );
        }),
        map(( response: any ) => { 
          if ( response.searchInformation.totalResults === "0" ) return false;
          debug(response);
          return response.items.map(( item: any ) => ({
            image: null,
            path: item.link,
            alt: item.title
          } as ImageResult));
        }),
        tap(( imageResult: ImageResult[] | boolean ) => debug( imageResult )),
        catchError(( error: Error ) => {
          debug(error);
          return of(`error: ${ error }`)
        }) 
      )
      .subscribe(( imageResult: ImageResult[] ) => {
        callback(imageResult);
      });
  }
}

export default SearchImageObservable;
