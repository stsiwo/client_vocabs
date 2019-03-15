import * as React from 'react';
import styled from '../../story/styledComponents';

interface Props { 
  className?: string;
  items: any[];
  onClickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
  isOpen: boolean;
  forwardedRef: React.Ref<HTMLUListElement>;
}

class AutoComplete extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.renderAutoCompleteItem = this.renderAutoCompleteItem.bind(this);
    this.handleAutoCompleteItemClick = this.handleAutoCompleteItemClick.bind(this);
  }

  renderAutoCompleteItem() {
    return this.props.items.map(( item ) => <li key={ item.id } value={ item.word } onClick={ this.handleAutoCompleteItemClick }>{ item.word }</li>);
  }

  handleAutoCompleteItemClick(e: React.MouseEvent<HTMLLIElement>) {
    this.props.onClickHandler(e);
  }

  render() {
    return (
      <ul className={ this.props.className } ref={ this.props.forwardedRef }>
        { this.renderAutoCompleteItem() } 
      </ul>
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

type UlProps = React.ComponentPropsWithoutRef<'ul'> 

const RefAutoComplete = React.forwardRef<HTMLUListElement, UlProps>(( props, ref ) => (
  <AutoComplete { ...props } forwardedRef={ ref } />
));

const StyledAutoComplete = styled(RefAutoComplete)`
  list-style-type: none;
  transform-origin: top;

  ${( props ) => {
    if ( props.isOpen ) {
      return `
        //transform: scaley(1);
        //transition: transform 0.5s;
      `;
    }
    else {
      return `
        //transform: scaley(0);
        //transition: transform 0.5s;
      `;
    }
  }}

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




