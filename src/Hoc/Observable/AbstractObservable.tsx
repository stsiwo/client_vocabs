import { Subject, Subscription } from 'rxjs';

abstract class AbstractObservable {

  protected observable: Subject<string>;

  constructor() {
    this.observable = new Subject<string>(); 
  }

  abstract getSubscription(callback: any): Subscription; 

  next( nextStream: string ) {
    this.observable.next( nextStream );
  }

}

export default AbstractObservable;
