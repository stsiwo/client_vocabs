import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import DefNodeCont from '../../../containers/Def/DefNodeCont';
import { IDef } from '../../../domains/def';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ArrayHelpers } from 'formik';

const arrowIcon = require('./assets/rightArrow.svg');
const newIcon = require('./assets/new.svg');

interface Props {
  className?: string;
  defs: IDef[]; 
  formik: CustomFormikProps;
  wordIndex: number;
  addNewDefClick: (arrayHelpers: ArrayHelpers, wordIndex: number) => void;
  arrayHelpers: ArrayHelpers;
  setFieldValue: (field: string, value: any) => void;
}

interface State {
  isDefNodeContOpen: boolean;
}

export class DefTree extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDefNodeContOpen: true,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleNewDefClick = this.handleNewDefClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentToggleStatus = this.state.isDefNodeContOpen;
    this.setState({ isDefNodeContOpen : !currentToggleStatus });  
  }

  handleNewDefClick(e: React.MouseEvent<HTMLElement>) {
    this.props.addNewDefClick(this.props.arrayHelpers, this.props.wordIndex);
  }

  renderDefNodeConts() {
    return this.props.defs.map(( eachDef, index ) => ( 
      <DefNodeCont 
        key={ eachDef.id } 
        def={ eachDef } 
        isOpen={ this.state.isDefNodeContOpen }
        formik={ this.props.formik }
        wordIndex={ this.props.wordIndex } 
        defIndex={ index }
        arrayHelpers={ this.props.arrayHelpers } 
        setFieldValue={ this.props.setFieldValue }
        defLength={ this.props.defs.length }
      />
    ));
  }

  render() {
    return (
      <div className={ this.props.className }>
        <div className="def-header">
          <div className="def-title">
            <Icon svgSrc={ arrowIcon } width="20px" height="20px" onClick={ this.handleToggleClick } rotate={ this.state.isDefNodeContOpen.toString() }></Icon>
            <h3>definition list</h3>
          </div>
          <div className="def-add-icon">
            <Icon id="addNewDefForm" svgSrc={ newIcon } onClick={ this.handleNewDefClick } width="20px" height="20px"></Icon>
          </div>
        </div>
        <div className="def-list">
          { this.renderDefNodeConts() }
        </div>
      </div>
    );
  }
}

const StyledDefTree = styled(DefTree)`

  & > .def-header {
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start; 

    & > .def-title {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;

      & > h3 {
        margin: 0;
      }
    }

    & > .def-add-icon {
      margin: 0 10px;
    }

  }

  & > .def-list {
    padding-inline-start: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;


    
  }
`;
StyledDefTree.displayName = "DefTreeSelector";

export default StyledDefTree;




