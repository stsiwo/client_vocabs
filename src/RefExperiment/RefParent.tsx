import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from '../representationals/story/styledComponents';
import RefChild from './RefChild';
import RefComponent from './RefComponent';

interface Props { 
  className?: string;
}

class RefParent extends React.PureComponent<Props, {}> {

  private ref: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>(); 
  /**
   * styled-components, typescript, and component ref
   *  - issue: TS2304: Cannot find name 'RefComponent'.
   *  - if target component is wrapped with styled components, typescript gives above error.
   *  - i don't know how to fix. current work around is to use any like below.
   *  - but need to fix.
   *  - #REFACTOR
   **/
  private compRef: React.RefObject<any> = React.createRef<any>(); 

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleComponentClick = this.handleComponentClick.bind(this);
  }

  handleClick() {
    this.ref.current.value = "test";
  }

  /**
   * in order to access native DOM element from the component
   *  - use ReactDOM.findDOMNode(component's instance);
   **/
  handleComponentClick() {
    console.log(ReactDOM.findDOMNode(this.compRef.current));
  }

  render() {
    return (
      <div>
        <RefChild inputRef={ this.ref } />
        <button type="button" onClick={ this.handleClick }>dom element ref</button>
        <RefComponent ref={ this.compRef } />
        <button type="button" onClick={ this.handleComponentClick }>component ref</button>
      </div>
    );
  }
}

const StyledRefParent = styled(RefParent)`
  
  background-color: black;
`;


export default StyledRefParent;






