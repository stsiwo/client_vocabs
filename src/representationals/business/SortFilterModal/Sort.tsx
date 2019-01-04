import * as React from 'react';
import styled from '../../story/styledComponents';
import Input from '../../base/Input/Input';
import Icon from '../../base/Icon/Icon';

const alphaAscIcon = require('./assets/alphaAsc.svg');
const alphaDescIcon = require('./assets/alphaDesc.svg');
const calNewIcon = require('./assets/calNew.svg');
const calOldIcon = require('./assets/calOld.svg');

enum SortEnum {
  ALPHA_ASC = 1,
  ALPHA_DESC = 2,
  DATE_NEWER = 3,
  DATE_OLDER = 4,
}

interface ISort {
  alphAsc: boolean;
  alphDesc: boolean;
  dateNewer: boolean;
  dateOlder: boolean;
}

interface Props {
  className?: string;
  onSortChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

interface State {
  sort: ISort;
}

class Sort extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sort: {
        alphAsc: true,
        alphDesc: false,
        dateNewer: false,
        dateOlder: false,
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const id = e.target.id;
    // radio button is checked or unchecked
    const isChecked = e.target.checked;
    // rest of radio status
    const currentSort = this.state.sort;
    // get current checked radio to make it false
    const currentChecked = Object.keys(currentSort).find(( key ) => currentSort[key] === true);
    // id: clicked one to make it true, and currentChecked is currently checked but [id] is now clicked, so make it false
    this.setState({ 
      sort: {
        ...currentSort,
        [id]: isChecked,
        [currentChecked]: false,
      }
    });
    // call parent onChange event to dispatch sort action
    // uncomment this when implement
    //this.props.onSortChange(e);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <h3>Sort:</h3>
        <div>
          <Input type="radio" id="alphAsc" name="sort" value={ SortEnum.ALPHA_ASC } checked={ this.state.sort.alphAsc } onChange={ this.handleChange }></Input>
          <label htmlFor="alphAsc">
            <Icon svgSrc={ alphaAscIcon } unchecked={ !this.state.sort.alphAsc }/>
            alph asc
          </label>
        </div>
        <div>
          <Input type="radio" id="alphDesc" name="sort" value={ SortEnum.ALPHA_DESC } checked={ this.state.sort.alphDesc } onChange={ this.handleChange }></Input>
          <label htmlFor="alphDesc">
            <Icon svgSrc={ alphaDescIcon } unchecked={ !this.state.sort.alphDesc }/>
            alph desc
          </label>
        </div>
        <div>
          <Input type="radio" id="dateNewer" name="sort" value={ SortEnum.DATE_NEWER } checked={ this.state.sort.dateNewer } onChange={ this.handleChange }></Input>
          <label htmlFor="dateNewer">
            <Icon svgSrc={ calNewIcon } unchecked={ !this.state.sort.dateNewer }/>
            date newer
          </label>
        </div>
        <div>
          <Input type="radio" id="dateOlder" name="sort" value={ SortEnum.DATE_OLDER } checked={ this.state.sort.dateOlder } onChange={ this.handleChange }></Input>
          <label htmlFor="dateOlder">
            <Icon svgSrc={ calOldIcon } unchecked={ !this.state.sort.dateOlder }/>
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




