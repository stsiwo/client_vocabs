import * as React from 'react';
import styled from '../../story/styledComponents';

interface Props {
  className?: string;
}

class Word extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        here is word page
      </div>
    );
  }
}

const StyledWord = styled(Word)`
`;


export default StyledWord;






