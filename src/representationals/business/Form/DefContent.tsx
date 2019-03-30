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
  imageURL: string;
}

export class DefContent extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSearchImageModalOpen: false,
      imageURL:  this.props.def.image
    }
    this.handleSearchImageToggleClick = this.handleSearchImageToggleClick.bind(this);
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
  }

  handleSearchImageToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentStatus = this.state.isSearchImageModalOpen;
    this.setState({ isSearchImageModalOpen: !currentStatus });
  }

  handleImageUrlChange( nextImageUrl: string ) {
    this.setState({ imageURL: nextImageUrl });
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
            image={ this.state.imageURL } 
            handleSearchImageToggleClick={ this.handleSearchImageToggleClick } 
            handleImageUrlChange={ this.handleImageUrlChange }
            formik={ this.props.formik }
            wordIndex={ this.props.wordIndex }
            defIndex={ this.props.defIndex }
            setFieldValue={ this.props.setFieldValue }
          /> 
        </li>
        <BottomModal isOpen={ this.state.isSearchImageModalOpen } handleSearchImageToggleClick={ this.handleSearchImageToggleClick }>
          <SearchImageModalContentCont 
            setFieldValue={ this.props.setFieldValue }
            wordIndex={ this.props.wordIndex }
            wordId={ this.props.def.wordId }
            defIndex={ this.props.defIndex }
            handleImageUrlChange={ this.handleImageUrlChange }
          />
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




