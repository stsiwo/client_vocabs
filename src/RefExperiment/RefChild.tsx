import * as React from 'react';
import styled from '../representationals/story/styledComponents';
import RefGrandChild from './RefGrandChild';

interface Props { 
  className?: string;
  inputRef: React.RefObject<HTMLInputElement>;
}


class RefChild extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <RefGrandChild ref={ this.props.inputRef } />
    );
  }
}


const StyledRefChild = styled(RefChild)`
  
  background-color: black;
`;


export default StyledRefChild;





