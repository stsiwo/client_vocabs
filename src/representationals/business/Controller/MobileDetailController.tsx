import * as React from 'react';
import styled from '../../story/styledComponents';
import { Vl } from '../../base/common/Line';
import BackControllerItemCont from '../../../containers/Controller/BackControllerItemCont';
import SaveControllerItemCont from '../../../containers/Controller/SaveControllerItemCont';
import NewControllerItemCont from '../../../containers/Controller/NewControllerItemCont';
import { FormValues } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';

interface Props {
  className?: string;
  formValues: FormValues;
  arrayHelpers: ArrayHelpers;
}

class MobileController extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <BackControllerItemCont />
        <Vl />
        <NewControllerItemCont arrayHelpers={ this.props.arrayHelpers }/>
        <Vl />
        <SaveControllerItemCont formValues={ this.props.formValues } />
      </div>
    );
  }
}

const StyleMobileController = styled(MobileController)`
  position: fixed;
  bottom: ${( props ) => props.theme.bottomBarHeightMargin + 'px' };
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
  height: ${( props ) => props.theme.bottomBarHeight + 'px' };
`;

export default StyleMobileController;






