import * as React from 'react';
import styled from '../../representationals/story/styledComponents';
import { AutoCompleteBags } from './type';
import { ObservableBags } from '../Observable/type';

//interface Props { 
  //className?: string;
  //items: any[];
  //onClickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
  //isOpen: boolean;
  //forwardedRef: React.Ref<HTMLUListElement>;
//}

interface Props {
  className?: string;
  render: ( state: AutoCompleteBags ) => React.ReactNode;
}

interface PropsWithObservable extends Props {
  observable: ObservableBags;
}

class AutoComplete extends React.PureComponent<PropsWithObservable, AutoCompleteBags> {

  private divRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>(); 

  // constructor is called only when mounting not updating
  constructor(props: PropsWithObservable) {
    super(props);
    this.state = {
      selectedResult: '',
    }
    this.renderAutoCompleteItem = this.renderAutoCompleteItem.bind(this);
    this.handleAutoCompleteItemClick = this.handleAutoCompleteItemClick.bind(this);
    this.handleCloseAutoComplete = this.handleCloseAutoComplete.bind(this);
    this.setAutoCompleteClose = this.setAutoCompleteClose.bind(this);
    this.isAutoCompleteOpen = this.isAutoCompleteOpen.bind(this);
  }

  renderAutoCompleteItem() {
    return this.props.observable.result.map(( item ) => <li key={ item.id } value={ item.word } onClick={ this.handleAutoCompleteItemClick }>{ item.word }</li>);
  }

  handleAutoCompleteItemClick(e: React.MouseEvent<HTMLLIElement>) {
    const target = e.target as HTMLLIElement;
    this.setState({ selectedResult: target.getAttribute('value') });
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleCloseAutoComplete);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleCloseAutoComplete);
  }

  handleCloseAutoComplete(e: Event/* this might need to be fixed */) {
    if (!this.divRef.current.contains(e.target as HTMLElement)) 
      this.setAutoCompleteClose();
  }

  setAutoCompleteClose() {
    this.props.observable.emptyInput();
  }

  isAutoCompleteOpen() {
    // empty input means autocomplete close
    return !this.props.observable.isInputEmpty();
  }

  render() {
    console.log(this.props.observable.result);
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

  & > li {
    // common
    border-bottom: 1px solid #B9B9B9;
    border-left: 1px solid #B9B9B9;
    border-right: 1px solid #B9B9B9;
    cursor: pointer;
    margin: 5px;
    padding: 5px;
  }
  
  
`;


export default StyledAutoComplete;




