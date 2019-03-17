import * as React from 'react';
import styled from '../representationals/story/styledComponents';

interface Props { 
  className?: string;
}


class RefComponent extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <input type="button" value="test" />
    );
  }
}


const StyledRefComponent = styled(RefComponent)`
  
  background-color: black;
`;


export default StyledRefComponent;
