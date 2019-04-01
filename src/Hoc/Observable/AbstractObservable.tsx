import { Subscription, Observable } from 'rxjs';
import CustomRef from '../../CustomRef';

abstract class AbstractObservable {

  protected observable: Observable<Event>;

  protected targetRef: CustomRef; 

  constructor( targetRef: CustomRef ) { 
    this.targetRef = targetRef;
  }

  abstract getSubscription(callback: any): Subscription; 
}

export default AbstractObservable;
