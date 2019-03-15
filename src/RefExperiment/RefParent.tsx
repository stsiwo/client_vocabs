import * as React from 'react';
import styled from '../representationals/story/styledComponents';
import RefChild from './RefChild';

interface Props { 
  className?: string;
}

class RefParent extends React.PureComponent<Props, {}> {

  private ref: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>(); 

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.ref.current.value = "test";
  }

  render() {
    return (
      <div>
        <RefChild inputRef={ this.ref } />
        <button type="button" onClick={ this.handleClick }>change</button>
      </div>
    );
  }
}

const StyledRefParent = styled(RefParent)`
  
  background-color: black;
`;


export default StyledRefParent;






