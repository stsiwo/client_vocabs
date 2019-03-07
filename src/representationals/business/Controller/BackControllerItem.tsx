import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
const backIcon = require('./assets/back.svg');
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  className?: string;
  backWordClick: () => void;
}

export class BackControllerItem extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick(e: React.MouseEvent<HTMLElement>) {
    this.props.backWordClick();
  }

  render() {
    return (
        <ControllerItem svgSrc={ backIcon } onClick={ this.onBackClick }>Back</ControllerItem>
    );
  }
}

export default withRouter(BackControllerItem);









