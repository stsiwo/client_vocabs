import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import { IDef } from '../../../domains/def';
import DefContent from '../Form/DefContent';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';

const defIcon = require('./assets/def.svg'); 
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
  setFieldValue: (field: string, value: any) => void;
  defLength: number;
}

export class DefNode extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleDeleteDefClick = this.handleDeleteDefClick.bind(this);
    this.isDefMoreThanOne = this.isDefMoreThanOne.bind(this);
  }

  handleDeleteDefClick(e: React.MouseEvent<HTMLElement>) {
    this.props.removeDefClick(this.props.arrayHelpers, this.props.wordIndex, this.props.defIndex);
  }

  isDefMoreThanOne() {
    return this.props.defLength > 1; 
  }

  render() {
    return (
      <ul className={ this.props.className }>
        <li>
          <div>
            <Icon 
              svgSrc={ defIcon } 
              width="20px" 
              height="20px" 
            />
            <h4>Definition</h4>
          </div>
          { this.isDefMoreThanOne() && 
          <div>
            <Icon 
              id="removeDefForm" 
              svgSrc={ deleteIcon } 
              onClick={ this.handleDeleteDefClick } 
              width="20px" 
              height="20px" 
            />
          </div> }
        </li>
        
        <DefContent 
          def={ this.props.def } 
          formik={ this.props.formik } 
          wordIndex={ this.props.wordIndex }
          defIndex={ this.props.defIndex }
          setFieldValue={ this.props.setFieldValue }  
        />
      </ul>
    );
  }
}

const StyledDefNode = styled(DefNode)`

  display: ${( props ) => props.isOpen ? '' : 'none' }; 
  padding-inline-start: 20px;

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



