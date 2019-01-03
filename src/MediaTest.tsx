import * as React from 'react';
import styled from './representationals/story/styledComponents';
import { Route } from 'react-router-dom';
import * as qs from 'query-string';

interface Props {
  className?: string;
}

class MediaTest extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route path="/test" render={(props) => {console.log(qs.parse(props.location.search)); return (<div>you got it</div>); }} />
      </div>
    );
  }
}

const StyledMediaTest = styled(MediaTest)`
`;


export default StyledMediaTest;


