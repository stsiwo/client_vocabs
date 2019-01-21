import * as React from 'react';
import styled from '../../story/styledComponents';
import PosSelectCont from '../../../containers/Form/PosSelectCont';
import DefTextCont from '../../../containers/Form/DefTextCont';
import DefImageFileCont from '../../../containers/Form/DefImageFileCont';
import BottomModal from '../../base/Modal/BottomModal';
import SearchImageModalContentCont from '../../../containers/SearchImageModalContentCont';
import { IDef } from '../../../domains/def';

interface Props {
  className?: string;
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
          <PosSelectCont pos={ this.props.def.pos } defId={ this.props.def.id } /> 
        </li>
        <li>
          <DefTextCont defText={ this.props.def.def }  defId={ this.props.def.id }/>
        </li>
        <li>
          <DefImageFileCont 
            image={ this.props.def.image } 
            handleSearchImageToggleClick={ this.handleSearchImageToggleClick } 
            defId={ this.props.def.id }
          /> 
        </li>
        <BottomModal isOpen={ this.state.isSearchImageModalOpen } handleSearchImageToggleClick={ this.handleSearchImageToggleClick }>
          <SearchImageModalContentCont wordId={ this.props.def._wordId } defId={ this.props.def.id }/>
        </BottomModal>
      </ul>
    );
  }
}

const StyledDefContent = styled(DefContent)`
  display: ${( props ) => props.isOpen ? '' : 'none' }; 
  list-style-type: none;
`;

export default StyledDefContent;




