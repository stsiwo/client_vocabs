import { Subscription, Observable } from 'rxjs';

abstract class AbstractObservable {

  protected observable: Observable<Event>;

  protected targetRef: Node; 

  constructor( targetRef: Node ) { 
    this.targetRef = targetRef;
  }

  abstract getSubscription(callback: any): Subscription; 
}

export default AbstractObservable;
