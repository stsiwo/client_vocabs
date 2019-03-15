import * as React from 'react';
import { Subject, Subscription, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

interface Suggestion {
  id: number;
  word: string;
}

interface ObservableState {
  result: Suggestion[];
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
      result: [],
      inputHandler: this.inputHandler,
    }
    this.observable = new Subject<string>(); 
  }

  componentDidMount() {
    this.subscription = this.observable
      .pipe(
        filter(( keyWord: string ) => keyWord !== ''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(( keyWord: string ) => ajax.getJSON(`http://localhost:3000/dictionary?keyWord=${ keyWord }`)),
        map(( response: { suggestionList: Suggestion[] }) => response.suggestionList ),
        tap(( suggestionList: Suggestion[] ) => console.log( suggestionList )),
        catchError(( error: Error ) => of(`error: ${ error }`)), 
      )
      .subscribe(( suggestionList: Suggestion[]) => {
        this.setState({ result: suggestionList })
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.observable.next(target.value);
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

