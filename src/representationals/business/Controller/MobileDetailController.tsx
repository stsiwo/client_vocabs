import * as React from 'react';
import styled from '../../story/styledComponents';
import { Vl } from '../../base/common/Line';
import BackControllerItem from './BackControllerItem';
import SaveControllerItemCont from '../../../containers/Controller/SaveControllerItemCont';
import NewControllerItemCont from '../../../containers/Controller/NewControllerItemCont';

interface Props {
  className?: string;
}

class MobileController extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <BackControllerItem />
        <Vl />
        <NewControllerItemCont />
        <Vl />
        <SaveControllerItemCont />
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

export default StyleMobileController;






