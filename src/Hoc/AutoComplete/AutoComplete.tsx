import * as React from 'react';
import styled from '../../representationals/story/styledComponents';
import { AutoCompleteBags } from './type';
import { ObservableBags } from '../Observable/type';
import { Result } from '../Observable/type';
const debug = require('debug')('AutoComplete');


interface Props {
  className?: string;
  render: ( state: AutoCompleteBags ) => React.ReactNode;
  input: string;
}

interface PropsWithObservable extends Props {
  observable: ObservableBags;
}

class AutoComplete extends React.PureComponent<PropsWithObservable, AutoCompleteBags> {

  // those refs are for close autocomplete when user click outside of autocomplete
  private liRefs: Node[]; 

  // this ref for close autocomplete when focus out from word name input and its autocomplete
  private divRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>(); 

  // constructor is called only when mounting not updating
  constructor(props: PropsWithObservable) {
    super(props);
    this.state = {
      // this is for update "Autocomplete" purecomponent
      input: this.props.input, 
      selectedResult: '',
    };
    this.liRefs = new Array<Node>(5);
    this.renderAutoCompleteItem = this.renderAutoCompleteItem.bind(this);
    this.handleAutoCompleteItemClick = this.handleAutoCompleteItemClick.bind(this);
    this.handleAutoCompleteItemKeyPress = this.handleAutoCompleteItemKeyPress.bind(this);
    this.handleCloseAutoCompleteFocusIn = this.handleCloseAutoCompleteFocusIn.bind(this);
    this.handleCloseAutoCompleteClick = this.handleCloseAutoCompleteClick.bind(this);
    this.setAutoCompleteClose = this.setAutoCompleteClose.bind(this);
    this.isAutoCompleteOpen = this.isAutoCompleteOpen.bind(this);
  }

  renderAutoCompleteItem() {
    return this.props.observable.result.map(( item: Result, index: number ) => (
      <li 
        key={ item.id } 
        value={ item.word } 
        onClick={ this.handleAutoCompleteItemClick } 
        onKeyDown={ this.handleAutoCompleteItemKeyPress }
        ref={( node: Node ) => this.liRefs[index] = node } 
        tabIndex={ 0 }>
          { item.word }
      </li>
    ));
  }

  handleAutoCompleteItemClick(e: React.MouseEvent<HTMLLIElement>) {
    const target = e.target as HTMLLIElement;
    this.setState({ selectedResult: target.getAttribute('value') });
    this.setAutoCompleteClose();
  }

  /**
   * the error caused by using key event on non-input element
   *  - detail: Assertion failed: Input argument is not an HTMLInputElement
          getFormProfile @ onloadwff.js:71
          setFieldValue @ onloadwff.js:71
          formKeydownListener @ onloadwff.js:71
          onloadwff.js:71 Uncaught TypeError: Cannot read property 'type' of undefined
        at e.setFieldValue (onloadwff.js:71)
        at HTMLFormElement.formKeydownListener (onloadwff.js:71)
      - this is because of LastPass (chrome extension)
      - solution: I don't know how to fix this
        #REFACTOR (ticket#2)
   **/
  handleAutoCompleteItemKeyPress(e: React.KeyboardEvent<HTMLLIElement>) {
    if (e.key === 'Enter') {
      const target = e.target as HTMLLIElement;
      this.setState({ selectedResult: target.getAttribute('value') });
      this.setAutoCompleteClose();
    }
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleCloseAutoCompleteClick);
    document.addEventListener('focusin', this.handleCloseAutoCompleteFocusIn);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleCloseAutoCompleteClick);
    document.removeEventListener('focusin', this.handleCloseAutoCompleteFocusIn);
  }

  handleCloseAutoCompleteClick(e: Event/* this might need to be fixed */) {
    const target = e.target as HTMLElement 
    if (!this.liRefs.includes(target)) 
      this.setAutoCompleteClose();
  }

  handleCloseAutoCompleteFocusIn(e: Event/* this might need to be fixed */) {
    const target = e.target as HTMLElement 
    if (!this.divRef.current.contains(target)) 
      this.setAutoCompleteClose();
  }

  setAutoCompleteClose() {
    this.props.observable.emptyResult();
  }

  isAutoCompleteOpen() {
    // empty input means autocomplete close
    return !this.props.observable.isResultEmpty();
  }

  render() {
    debug(this.props.observable);
    return (
      <div ref={ this.divRef }>
        { this.props.render( this.state ) }
        {( this.isAutoCompleteOpen() && 
          <ul className={ this.props.className } >
            { this.renderAutoCompleteItem() } 
          </ul>
        )}
      </div>
    );
  }
}

/**
 * animation CSS 
 *  - use combination of transform and transition together
 *  - better performance
 *  - more flexible than only using transition
 *    - ex1: transition with height or width 
 *      - only transition: child element is not included in animation
 *      - transform/transition: any child element is also included for the animation
 *    - ex2: transform-origin is super useful: allow you to decide origin (e.g., x and y position) of animation, so based on the origin, the animation is applied
 *      
 *
 **/


const StyledAutoComplete = styled(AutoComplete)`
  list-style-type: none;
  transform-origin: top;
  padding-inline-start: 0; 

  & > li {
    // common
    border-bottom: 1px solid #B9B9B9;
    border-left: 1px solid #B9B9B9;
    border-right: 1px solid #B9B9B9;
    cursor: pointer;
    margin: 5px;
    padding: 5px;

    &:focus {
      background-color: ${( props ) => props.theme.thirdColor};
    }
  }

  
  
  
`;


export default StyledAutoComplete;




