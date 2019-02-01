import * as React from 'react';
import styled from '../../story/styledComponents';
import { Vl } from '../../base/common/Line';
import NewControllerItemCont from '../../../containers/Controller/NewControllerItemCont';
import DeleteControllerItemCont from '../../../containers/Controller/DeleteControllerItemCont';
import SortFilterControllerItemCont from '../../../containers/Controller/SortFilterControllerItemCont';
import SearchWordControllerItemCont from '../../../containers/Controller/SearchWordControllerItemCont';
import SelectAllControllerItemCont from '../../../containers/Controller/SelectAllControllerItemCont';
//import SaveControllerItemCont from '../../../containers/Controller/SaveControllerItemCont';

interface Props {
  className?: string;
}


class MobileController extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <NewControllerItemCont />
        <Vl />
        <DeleteControllerItemCont />
        <Vl />
        <SortFilterControllerItemCont />
        <Vl />
        <SearchWordControllerItemCont />
        <Vl />
        <SelectAllControllerItemCont />
      {/*
        <Vl />
        <SaveControllerItemCont />
        */}
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





