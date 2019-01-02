import * as React from 'react';
import styled from '../../story/styledComponents';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  className?: string;
}

class WordDetail extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        word detail with { this.props.match.params.id } 
      </div>
    );
  }
}

const StyledWordDetail = styled(WordDetail)`
`;


export default StyledWordDetail;


