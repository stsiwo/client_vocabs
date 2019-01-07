import * as React from 'react';
import ControllerItem from '../../base/Controller/ControllerItem';
const backIcon = require('./assets/back.svg');
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  className?: string;
}

class BackControllerItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick(e: React.MouseEvent<HTMLElement>) {
    this.props.history.push('/word');
  }

  render() {
    return (
        <ControllerItem id="back-controller-item" svgSrc={ backIcon } onClick={ this.onBackClick }>Back</ControllerItem>
    );
  }
}

export default withRouter(BackControllerItem);









