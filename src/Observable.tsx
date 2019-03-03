import * as React from 'react';
import { Subject, Subscription, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


interface ObservableState {
  input: string;
  result: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props {
  render: ( state: ObservableState ) => React.ReactNode;
}


class Observable extends React.PureComponent<Props, ObservableState> {

  observable: Subject<string>; 

  subscription: Subscription;

  constructor(props: Props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.state = {
      input: "default",
      result: "no results",
      inputHandler: this.inputHandler,
    }
    this.observable = new Subject<string>(); 
  }

  componentDidMount() {
    this.subscription = this.observable
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(( keyWord: string ) => ajax.getJSON(`http://localhost:3000/dictionary?keyWord=${ keyWord }`)),
        tap(( wordList: { word: string }[] ) => console.log( wordList )),
        catchError(( error: Error ) => of(`error: ${ error }`)), 

      )
      .subscribe(( wordList: { word: string }[]) => {
        console.log(wordList);
        //this.setState({ result: input })
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.observable.next(target.value);
    this.setState({ input: target.value })
  }

  render() {
    return (
      <div>
        { this.props.render( this.state )}
      </div>
    );
  }

}

export default Observable;

