import * as React from 'react';
import styled from '../../story/styledComponents';
//import { ThemeInterface } from '../../story/theme'; 
import Search from '../../base/Input/Search';
import { changeSearchKeyWordDispatchType } from '../../../containers/type';

interface Props {
  className?: string;
  searchKeyWord: string;
  changeSearchKeyWord: changeSearchKeyWordDispatchType;
}

// when Search Icon in Controoler clicked, toggle this Component with animation from bottom to above controller
class SearchWordModal extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.stopBubblingUpCloseEvent = this.stopBubblingUpCloseEvent.bind(this);
    this.handleChangeSearchKeyWord = this.handleChangeSearchKeyWord.bind(this);
  }

  stopBubblingUpCloseEvent(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  handleChangeSearchKeyWord(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeSearchKeyWord(e.target.value);
  }

  render() {
    return (
      <div className={ this.props.className } >
        <Search labelName="word-name-search" placeholder="search your word here..." value={ this.props.searchKeyWord } onChange={ this.handleChangeSearchKeyWord }/>
      </div>
    );
  }
}

//interface IStyledProps extends Props {
  //theme: ThemeInterface;
//}

const StyledSearchWordModal = styled(SearchWordModal)`
  position: fixed;
  bottom: ${( props ) => props.theme.bottomBarHeight };
  width: 100%;
  background-color: #FFFFFF; 
`;
StyledSearchWordModal.displayName = "SearchWordModalSelector";


export default StyledSearchWordModal;


