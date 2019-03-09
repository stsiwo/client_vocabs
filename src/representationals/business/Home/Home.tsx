import * as React from 'react';
import styled from '../../story/styledComponents';
import FlashMessage from '../../base/FlashMessage/FlashMessage';

interface Props {
  className?: string;
}

interface State {
  isFMOpen: boolean;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      isFMOpen: false,
    }
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    const isFMOpen = this.state.isFMOpen;
    this.setState({ isFMOpen: !isFMOpen });
  }

  render() {
    return (
      <div>
        here is home page

      {( this.state.isFMOpen && <FlashMessage message="test flash message" type="success" onClose={ this.onClose }/> )}
        <button type="button" onClick={ this.onClose }>Open</button>
        <img src="http://res.cloudinary.com/dre4nikvb/image/upload/sample.jpg" />
      </div>
    );
  }
}

const StyledHome = styled(Home)`
`;
StyledHome.displayName = "HomeSelector";


export default StyledHome;


