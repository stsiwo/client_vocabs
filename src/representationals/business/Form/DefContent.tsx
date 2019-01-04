import * as React from 'react';
import styled from '../../story/styledComponents';
import Select from '../../base/Input/Select';
import Text from '../../base/Input/Text';
import { pos } from '../../../domains/pos';
import File from '../../base/Input/File';
import BottomModal from '../../base/Modal/BottomModal';
import SearchModalContent from '../SearchImageModal/SearchModalContent';
import { IDef } from '../../../domains/def';

interface Props {
  className?: string;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  def: IDef;
  isOpen: boolean;
}

interface State {
  isSearchImageModalOpen: boolean;
}

class DefContent extends React.Component<Props, State> {
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
          <Select onChange={ this.props.onSelectChange } items={ pos } pos={ this.props.def.pos } labelName="pos">Pos</Select>
        </li>
        <li>
          <Text onChange={ this.props.onTextChange } placeholder="enter your definition here..." labelName="def" value={ this.props.def.def }>Def</Text>
        </li>
        <li>
          <File labelName="def-upload-image" handleSearchImageToggleClick={ this.handleSearchImageToggleClick } file={ this.props.def.image }/> 
        </li>
        <BottomModal isOpen={ this.state.isSearchImageModalOpen } handleSearchImageToggleClick={ this.handleSearchImageToggleClick }><SearchModalContent initialSearchInput="initial value" /></BottomModal>
      </ul>
    );
  }
}

const StyledDefContent = styled(DefContent)`
  display: ${( props ) => props.isOpen ? '' : 'none' }; 
  list-style-type: none;
`;

export default StyledDefContent;




