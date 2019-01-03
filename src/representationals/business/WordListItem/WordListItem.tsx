import * as React from 'react';
import styled from '../../story/styledComponents';

interface Props {
  className?: string;
  children: string;
}


class WordListItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <li className={ this.props.className }>
        { this.props.children }
      </li>
    );
  }
}

const StyledWordListItem = styled(WordListItem)`
  margin: 10px;
`;


export default StyledWordListItem;


