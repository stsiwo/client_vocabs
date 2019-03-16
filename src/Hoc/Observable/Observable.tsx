import * as React from 'react';
import { Subject, Subscription, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ObservableBags, Result } from './type';

interface Props {
  render: ( state: ObservableBags ) => React.ReactNode;
}

/**
 * using formik form props as Producer cause input lag
 *  - I don't know why but better to create state in Observable then use it as Producer so you can avoid lag problem
 **/

class Observable extends React.PureComponent<Props, ObservableBags> {

  observable: Subject<string>; 

  subscription: Subscription;

  constructor(props: Props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.isInputEmpty = this.isInputEmpty.bind(this);
    this.emptyInput = this.emptyInput.bind(this);
    this.state = {
      input: "", // create producer indenpendent from formik actual state
      result: [],
      inputHandler: this.inputHandler,
      emptyInput: this.emptyInput,
      isInputEmpty: this.isInputEmpty,
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
        map(( response: { suggestionList: Result[] }) => response.suggestionList ),
        tap(( suggestionList: Result[] ) => console.log( suggestionList )),
        catchError(( error: Error ) => of(`error: ${ error }`)), 
      )
      .subscribe(( suggestionList: Result[]) => {
        this.setState({ result: suggestionList })
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

  // this is for close autocomplete
  emptyInput() {
    this.setState({ input: "" });
  }

  // this is for checking autocomplete should be closed
  isInputEmpty() {
    return this.state.input === '';
  }

  render() {
    return (
      <React.Fragment>
        { this.props.render( this.state )}
      </React.Fragment>
    );
  }

}

export default Observable;


