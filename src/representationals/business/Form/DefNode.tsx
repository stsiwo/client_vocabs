import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import { IDef } from '../../../domains/def';
import DefContent from '../Form/DefContent';

const arrowIcon = require('./assets/rightArrow.svg');
const deleteIcon = require('./assets/delete.svg');

interface Props {
  className?: string;
  def: IDef;
  isOpen: boolean;
  removeDefClick: ( wordId: string, defIds: string[] ) => void;
}

interface State {
  isDefContentOpen: boolean;
}

export class DefNode extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDefContentOpen: true,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleDeleteDefClick = this.handleDeleteDefClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentToggleStatus = this.state.isDefContentOpen;
    this.setState({ isDefContentOpen : !currentToggleStatus });  
  }

  handleDeleteDefClick(e: React.MouseEvent<HTMLElement>) {
    // dispatch removeDefAction
    this.props.removeDefClick(this.props.def._wordId, [ this.props.def.id ]);
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
        
        <DefContent 
          def={ this.props.def } 
          isOpen={this.state.isDefContentOpen } 
        />
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



