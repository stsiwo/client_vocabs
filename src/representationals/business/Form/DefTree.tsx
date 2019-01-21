import * as React from 'react';
import styled from '../../story/styledComponents';
import Icon from '../../base/Icon/Icon';
import DefNodeCont from '../../../containers/Def/DefNodeCont';
import { IDef } from '../../../domains/def';

const arrowIcon = require('./assets/rightArrow.svg');
const newIcon = require('./assets/new.svg');

interface Props {
  className?: string;
  defs: IDef[]; 
  addNewDefClick: ( wordId: string ) => void;
}

interface State {
  isDefNodeOpen: boolean;
}

export class DefTree extends React.Component<Props, State> {
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
    // need to get word id of defs so pick any def's _wordId
    this.props.addNewDefClick(this.props.defs[0]._wordId);
  }

  renderDefNodes() {
    return this.props.defs.map(( eachDef ) => ( 
      <DefNodeCont 
        key={ eachDef.id } 
        def={ eachDef } 
        isOpen={ this.state.isDefNodeOpen }>
      </DefNodeCont>
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
            <Icon svgSrc={ newIcon } onClick={ this.handleNewDefClick } width="20px" height="20px"></Icon>
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

export default StyledDefTree;




