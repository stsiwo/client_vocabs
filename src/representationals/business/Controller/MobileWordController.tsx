import * as React from 'react';
import styled from '../../story/styledComponents';
import DeleteControllerItemCont from '../../../containers/Controller/DeleteControllerItemCont';
import EditControllerItemCont from '../../../containers/Controller/EditControllerItemCont';
import SortFilterControllerItemCont from '../../../containers/Controller/SortFilterControllerItemCont';
import SearchWordControllerItemCont from '../../../containers/Controller/SearchWordControllerItemCont';
import SelectAllControllerItemCont from '../../../containers/Controller/SelectAllControllerItemCont';
import { Vl } from '../../base/common/Line';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> {
  className?: string;
}


class MobileWordController extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <DeleteControllerItemCont />
        <Vl />
        <EditControllerItemCont />
        <Vl />
        <SortFilterControllerItemCont />
        <Vl />
        <SearchWordControllerItemCont />
        <Vl />
        <SelectAllControllerItemCont />
      </div>
    );
  }
}

const StyleMobileWordController = styled(MobileWordController)`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: ${ (props) => props.theme.sizes.mobileS };
  height: ${( props ) => props.theme.bottomBarHeight };

`;

export default withRouter(StyleMobileWordController);




