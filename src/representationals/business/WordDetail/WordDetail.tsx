import * as React from 'react';
import styled from '../../story/styledComponents';
import { RouteComponentProps } from 'react-router-dom';

interface IWordTypeTest {
  id: number;
  name: string;
}

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  className?: string;
  words: IWordTypeTest[]; 
}

class WordDetail extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { words } = this.props;
    const id: number = parseInt(this.props.match.params.id) -1;
    return (
      <div className={ this.props.className }>
        word { words[id].id } and its name { words[id].name } 
     </div>
    );
  }
}

const StyledWordDetail = styled(WordDetail)`
  @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
    margin-left: ${( props ) => props.theme.sideBarWidth };
  }

`;


export default StyledWordDetail;


