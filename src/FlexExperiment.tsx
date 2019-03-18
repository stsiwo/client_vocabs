import * as React from 'react';
import styled from './representationals/story/styledComponents';

interface Props {
  className?: string;
}

class FlexExperiment extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <div className="item1">item1</div>
        <div className="item2">item2</div>
      </div>
    );
  }
}

const StyledFlexExperiment = styled(FlexExperiment)`

  display: flex;
  justify-content: space-around;

  & > div {
    background-color: yellow;
    font-size: 15px;
    width: 100px;
  }

  & > .item1 {
    flex: 0 0 100px;
    margin-left: 50px; 
  }
  
  & > .item2 {
    flex: 1 1 100px;
    background-color: red;
    margin-right: 50px; 
  }

`;

export default StyledFlexExperiment; 



