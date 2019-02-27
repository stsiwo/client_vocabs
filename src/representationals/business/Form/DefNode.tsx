import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import { IDef } from '../../../domains/def';
import DefContent from '../Form/DefContent';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';

const arrowIcon = require('./assets/rightArrow.svg');
const deleteIcon = require('./assets/delete.svg');

interface Props {
  className?: string;
  def: IDef;
  isOpen: boolean;
  formik: CustomFormikProps;
  wordIndex: number;
  defIndex: number;
  arrayHelpers: ArrayHelpers;
  removeDefClick: (arrayHelpers: ArrayHelpers, wordIndex: number, defIndex: number) => void;
}

interface State {
  isDefContentOpen: boolean;
}

export class DefNode extends React.PureComponent<Props, State> {
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
    this.props.removeDefClick(this.props.arrayHelpers, this.props.wordIndex, this.props.defIndex);
  }

  render() {
    return (
      <ul className={ this.props.className }>
        <li>
          <div>
            <Icon svgSrc={ arrowIcon } width="20px" height="20px" onClick={ this.handleToggleClick } rotate={ this.state.isDefContentOpen }></Icon>
            <h4>Definition</h4>
          </div>
          { this.props.defIndex !== 0 && 
            // render delete icon only def index is not 0 since a word must have at least one def 
            // this might not be a good way to do this since user can't delete the first def. what if user want to delete it when the other defs are avaiable. 
            // #REFACTOR
          <div>
            <Icon id="removeDefForm" svgSrc={ deleteIcon } onClick={ this.handleDeleteDefClick } width="20px" height="20px"></Icon>
          </div> }
        </li>
        
        <DefContent 
          def={ this.props.def } 
          isOpen={this.state.isDefContentOpen } 
          formik={ this.props.formik } 
          wordIndex={ this.props.wordIndex }
          defIndex={ this.props.defIndex }
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
StyledDefNode.displayName = "DefNodeSelector";

export default StyledDefNode;



