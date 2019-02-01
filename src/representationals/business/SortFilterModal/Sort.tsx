import * as React from 'react';
import styled from '../../story/styledComponents';
import Input from '../../base/Input/Input';
import Icon from '../../base/Icon/Icon';
import { ISort } from '../../../domains/sort';
import { SORT_ORDER } from '../../../enums/index';
import { changeSortDispatchType } from '../../../containers/type';

const alphaAscIcon = require('./assets/alphaAsc.svg');
const alphaDescIcon = require('./assets/alphaDesc.svg');
const calNewIcon = require('./assets/calNew.svg');
const calOldIcon = require('./assets/calOld.svg');

interface Props {
  className?: string;
  currentSort: ISort;
  changeSort: changeSortDispatchType; 
}

class Sort extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeSort(parseInt(e.target.value));
  }

  render() {
    return (
      <div className={ this.props.className }>
        <h3>Sort:</h3>
        <div>
          <Input type="radio" id="alphAsc" name="sort" value={ SORT_ORDER.ALPHA_ASC } checked={ this.props.currentSort[SORT_ORDER.ALPHA_ASC] } onChange={ this.handleChange }></Input>
          <label htmlFor="alphAsc">
            <Icon svgSrc={ alphaAscIcon } unchecked={ !this.props.currentSort[SORT_ORDER.ALPHA_ASC] }/>
            alph asc
          </label>
        </div>
        <div>
          <Input type="radio" id="alphDesc" name="sort" value={ SORT_ORDER.ALPHA_DESC } checked={ this.props.currentSort[SORT_ORDER.ALPHA_DESC] } onChange={ this.handleChange }></Input>
          <label htmlFor="alphDesc">
            <Icon svgSrc={ alphaDescIcon } unchecked={ !this.props.currentSort[SORT_ORDER.ALPHA_DESC] }/>
            alph desc
          </label>
        </div>
        <div>
          <Input type="radio" id="dateNewer" name="sort" value={ SORT_ORDER.DATE_NEWER } checked={ this.props.currentSort[SORT_ORDER.DATE_NEWER] } onChange={ this.handleChange }></Input>
          <label htmlFor="dateNewer">
            <Icon svgSrc={ calNewIcon } unchecked={ !this.props.currentSort[SORT_ORDER.DATE_NEWER] }/>
            date newer
          </label>
        </div>
        <div>
          <Input type="radio" id="dateOlder" name="sort" value={ SORT_ORDER.DATE_OLDER } checked={ this.props.currentSort[SORT_ORDER.DATE_OLDER] } onChange={ this.handleChange }></Input>
          <label htmlFor="dateOlder">
            <Icon svgSrc={ calOldIcon } unchecked={ !this.props.currentSort[SORT_ORDER.DATE_OLDER] }/>
            date older
          </label>
        </div>
      </div>
    );
  }
}

const StyledSort = styled(Sort)`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   font-family: ${( props ) => props.theme.primaryFontFamily };
   margin: 5px 0;
   
   & > h3 {
    margin-right: 10px;
   }

   & > div {
    margin: 0 5px;
   } 
   
   // readio button
   & > div > input {
     // hide radio icon
     display: none; 
   }

   & > div > label {
    cursor: pointer;
   } 
`;


export default StyledSort;




