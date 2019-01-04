import * as React from 'react';
import styled from '../../story/styledComponents';
import ControllerItem from '../../base/Controller/ControllerItem';
import { Vl } from '../../base/common/Line';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
const saveIcon = require('./assets/save.svg');
const backIcon = require('./assets/back.svg');


interface Props extends RouteComponentProps<{}> {
  className?: string;
}


class MobileController extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onSaveClick(e: React.MouseEvent<HTMLElement>) {
    // save current detail and where should I go ?
  }

  onBackClick(e: React.MouseEvent<HTMLElement>) {
    this.props.history.push("/word");
  }

  render() {
    return (
      <div className={ this.props.className }>
        <ControllerItem svgSrc={ backIcon }>Back</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ saveIcon }>Save</ControllerItem>
      </div>
    );
  }
}

const StyleMobileController = styled(MobileController)`
  position: fixed;
  bottom: ${( props ) => props.theme.bottomBarHeightMargin };
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 35px;
  box-shadow: 1px 1px 1px;
  padding: 3px 15px;
  background-color: ${( props ) => props.theme.secondaryColor };

  width: ${ (props) => props.theme.sizes.mobileS };
  height: ${( props ) => props.theme.bottomBarHeight };
`;

export default withRouter(StyleMobileController);






