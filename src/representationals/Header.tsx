import * as React from 'react';
import styled from './story/styledComponents';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

class Header extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/about">ABOUT</Link>
        <Link to="/word">WORD</Link>
        <Link to="/dictionary">DICTIONARY</Link>
     </div>
    );
  }
}

const StyledHeader = styled(Header)`
`;


export default StyledHeader;


