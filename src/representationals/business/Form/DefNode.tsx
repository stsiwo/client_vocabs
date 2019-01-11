import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import DefContent from './DefContent';
import { IPos, pos } from '../../../domains/pos';
import { IDef } from '../../../domains/def';

const arrowIcon = require('./assets/rightArrow.svg');
const deleteIcon = require('./assets/delete.svg');

interface Props {
  className?: string;
  def: IDef;
  isOpen: boolean;
  initialSearchInput: string;
  onDefChange: (newValue: IPos | string, targetId: string, property: string) => void;
  onDeleteDefClick: (targetId: string) => void;
}

interface State {
  isDefContentOpen: boolean;
}

class DefNode extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDefContentOpen: true,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handlePosSelectChange = this.handlePosSelectChange.bind(this);
    this.handleDefTextChange = this.handleDefTextChange.bind(this);
    this.handleDeleteDefClick = this.handleDeleteDefClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentToggleStatus = this.state.isDefContentOpen;
    this.setState({ isDefContentOpen : !currentToggleStatus });  
  }

  handlePosSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const targetPosItem = pos.find(( pos ) => pos.value === e.target.value);
    this.props.onDefChange(targetPosItem, this.props.def.id, 'pos');
  }

  handleDefTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onDefChange(e.target.value, this.props.def.id, 'def');
  }

  handleDeleteDefClick() {
    this.props.onDeleteDefClick(this.props.def.id);
  }

  render() {
    return (
      <ul className={ this.props.className }>
        <li>
          <div>
            <Icon svgSrc={ arrowIcon } width="20px" height="20px" onClick={ this.handleToggleClick } rotate={ this.state.isDefContentOpen }></Icon>
            <h4>Definition</h4>
          </div>
          <div>
            <Icon svgSrc={ deleteIcon } onClick={ this.handleDeleteDefClick } width="20px" height="20px"></Icon>
          </div>
        </li>
        <DefContent onSelectChange={ this.handlePosSelectChange } onTextChange={ this.handleDefTextChange } def={ this.props.def } isOpen={this.state.isDefContentOpen } />
      </ul>
    );
  }
}

const StyledDefNode = styled(DefNode)`

  display: ${( props ) => props.isOpen ? '' : 'none' }; 

  & > li:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div:first-child {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;

      & > h4 {
        margin: 0;
      }
    }

    & > div:last-child {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

`;

export default StyledDefNode;



