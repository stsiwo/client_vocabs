import * as React from 'react';
import styled from '../../story/styledComponents';
//import { ThemeInterface } from '../../story/theme'; 
import Search from '../../base/Input/Search';
import { changeSearchKeyWordDispatchType } from '../../../containers/type';
import CustomRef from '../../../CustomRef';

interface Props {
  className?: string;
  searchKeyWord: string;
  changeSearchKeyWord: changeSearchKeyWordDispatchType;
}

// when Search Icon in Controoler clicked, toggle this Component with animation from bottom to above controller
class SearchWordModal extends React.PureComponent<Props, {}> {

  private ref: CustomRef = null; 

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

  componentDidMount() {
    ( this.ref.node as HTMLInputElement ).focus();
  }

  render() {
    return (
      <div className={ this.props.className } >
        <Search labelName="word-name-search" placeholder="search your word here..." value={ this.props.searchKeyWord } onChange={ this.handleChangeSearchKeyWord } inputRef={ this.ref }/>
      </div>
    );
  }
}

//interface IStyledProps extends Props {
  //theme: ThemeInterface;
//}

const StyledSearchWordModal = styled(SearchWordModal)`
  position: fixed;
  bottom: ${( props ) => props.theme.bottomBarHeight + 'px' };
  width: 100%;

  background-color: #FFFFFF; 

  // >= tablet 
  @media (min-width: ${( props ) => props.theme.sizes.mobileL + 1 }px) {
    background-color: transparent;
    width: ${( props ) => props.theme.sizes.mobileS + 'px' };
    // this is because controller in >=tablet size is added margin (bottomBarHeightMargin) so this search modal bottom height should be controller itself size + the margin size
    bottom: ${( props ) => props.theme.bottomBarHeight + props.theme.bottomBarHeightMargin + 'px' };
  }

`;
StyledSearchWordModal.displayName = "SearchWordModalSelector";


export default StyledSearchWordModal;


