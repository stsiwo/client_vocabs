import * as React from 'react';
import styled from '../../story/styledComponents';
import PosSelect from './PosSelect';
import DefText from './DefText';
import DefImageFile from './DefImageFile';
import BottomModal from '../../base/Modal/BottomModal';
import SearchImageModalContentCont from '../../../containers/SearchImageModalContentCont';
import { IDef } from '../../../domains/def';
import { CustomFormikProps } from '../../../Hoc/withForm';

interface Props {
  className?: string;
  def: IDef;
  formik: CustomFormikProps;
  wordIndex: number;
  defIndex: number;
  setFieldValue: (field: string, value: any) => void;
}

interface State {
  isSearchImageModalOpen: boolean;
}

export class DefContent extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSearchImageModalOpen: false,
    }
    this.handleSearchImageToggleClick = this.handleSearchImageToggleClick.bind(this);
  }

  handleSearchImageToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentStatus = this.state.isSearchImageModalOpen;
    this.setState({ isSearchImageModalOpen: !currentStatus });
  }

  render() {
    return (
      <ul className={ this.props.className }>
        <li>
          <PosSelect 
            posId={ this.props.def.posId } 
            formik={ this.props.formik } 
            wordIndex={ this.props.wordIndex }
            defIndex={ this.props.defIndex }
          /> 
        </li>
        <li>
          <DefText 
            defText={ this.props.def.def } 
            formik={ this.props.formik }
            wordIndex={ this.props.wordIndex }
            defIndex={ this.props.defIndex }
          />
        </li>
        <li>
          <DefImageFile 
            image={ this.props.def.image } 
            handleSearchImageToggleClick={ this.handleSearchImageToggleClick } 
            formik={ this.props.formik }
            wordIndex={ this.props.wordIndex }
            defIndex={ this.props.defIndex }
            setFieldValue={ this.props.setFieldValue }
          /> 
        </li>
      {/*
        imag search functionality need to actual url not localhost so implment when dev server
        #NEED_IMPLEMENT
        */}
        <BottomModal isOpen={ this.state.isSearchImageModalOpen } handleSearchImageToggleClick={ this.handleSearchImageToggleClick }>
          <SearchImageModalContentCont wordId={ this.props.def.wordId } defId={ this.props.def.id }/>
        </BottomModal>
      </ul>
    );
  }
}

const StyledDefContent = styled(DefContent)`
  list-style-type: none;
  padding-inline-start: 20px;

  & > li {
    margin: 5px 0;
  }
`;

export default StyledDefContent;




