import * as React from 'react';
import { Subject, Subscription, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ObservableBags, Result } from './type';
import AutoComplete from '../../representationals/base/AutoComplete/AutoComplete';

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

  private autoCompleteRef: React.RefObject<HTMLUListElement>;

  constructor(props: Props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.renderAutoComplete = this.renderAutoComplete.bind(this);
    this.isAutoCompleteActive = this.isAutoCompleteActive.bind(this);
    this.closeAutoComplete = this.closeAutoComplete.bind(this);
    this.autoCompleteRef = React.createRef<HTMLUListElement>();
    this.state = {
      input: "", // create producer indenpendent from formik actual state
      result: [],
      inputHandler: this.inputHandler,
      renderAutoComplete: this.renderAutoComplete,
      isAutoCompleteActive: this.isAutoCompleteActive,
      closeAutoComplete: this.closeAutoComplete,
      autoCompleteRef: this.autoCompleteRef
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

  renderAutoComplete( onClickHandler: (e: React.MouseEvent<HTMLLIElement> ) => void ) {
    return <AutoComplete items={ this.state.result } onClickHandler={ onClickHandler } isOpen={ this.isAutoCompleteActive() } ref={ this.autoCompleteRef } /> 
  }

  isAutoCompleteActive() {
    return this.state.input.length !== 0;
  }

  closeAutoComplete() {
    this.setState({ input: "" });
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


