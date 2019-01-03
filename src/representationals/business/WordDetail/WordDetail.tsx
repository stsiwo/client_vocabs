import * as React from 'react';
import styled from '../../story/styledComponents';
import { RouteComponentProps } from 'react-router-dom';

interface IWordTypeTest {
  id: number;
  name: string;
}

interface Props extends RouteComponentProps<{}> {
  className?: string;
  words: IWordTypeTest[]; 
}

class WordDetail extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
      details
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


