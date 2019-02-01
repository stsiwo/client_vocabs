import * as React from 'react';
import styled from '../../story/styledComponents';

interface Props {
  className?: string;
}

class Dictionary extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        here is dictionary page
      </div>
    );
  }
}

const StyledDictionary = styled(Dictionary)`
`;


export default StyledDictionary;






