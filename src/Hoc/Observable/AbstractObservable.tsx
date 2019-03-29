import { Subject, Subscription } from 'rxjs';
import { Result } from './type';

abstract class AbstractObservable {

  protected observable: Subject<string>;

  constructor() {
    this.observable = new Subject<string>(); 
  }

  abstract getSubscription(callback: (nextResult: Result[]) => void): Subscription; 

  next( nextStream: string ) {
    this.observable.next( nextStream );
  }

}

export default AbstractObservable;
