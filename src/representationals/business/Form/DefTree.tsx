import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import DefNode from './DefNode';
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
}

interface State {
  isDefNodeOpen: boolean;
}

export class DefTree extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDefNodeOpen: true,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleNewDefClick = this.handleNewDefClick.bind(this);
  }

  handleToggleClick(e: React.MouseEvent<HTMLElement>) {
    const currentToggleStatus = this.state.isDefNodeOpen;
    this.setState({ isDefNodeOpen : !currentToggleStatus });  
  }

  handleNewDefClick(e: React.MouseEvent<HTMLElement>) {
    this.props.addNewDefClick(this.props.arrayHelpers, this.props.wordIndex);
  }

  renderDefNodes() {
    return this.props.defs.map(( eachDef, index ) => ( 
      <DefNode 
        key={ eachDef.id } 
        def={ eachDef } 
        isOpen={ this.state.isDefNodeOpen }
        formik={ this.props.formik }
        wordIndex={ this.props.wordIndex } 
        defIndex={ index }
      />
    ));
  }

  render() {
    return (
      <ul className={ this.props.className }>
        <li>
          <div>
            <Icon svgSrc={ arrowIcon } width="20px" height="20px" onClick={ this.handleToggleClick } rotate={ this.state.isDefNodeOpen }></Icon>
            <h3>definition list</h3>
          </div>
          <div>
            <Icon id="addNewDefForm" svgSrc={ newIcon } onClick={ this.handleNewDefClick } width="20px" height="20px"></Icon>
          </div>
        </li>
        { this.renderDefNodes() }
      </ul>
    );
  }
}

const StyledDefTree = styled(DefTree)`

  padding-inline-start: 0;

  & ul {
    padding-inline-start: 20px;
  }

  & li {
    margin: 5px 0;
  }

  & > li:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div:first-child {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;

      & > h3 {
        margin: 0;
      }
    }
  }
`;
StyledDefTree.displayName = "DefTreeSelector";

export default StyledDefTree;




