import * as React from 'react';
import styled from '../../story/styledComponents';
//import { ThemeInterface } from '../../story/theme'; 
import Search from '../../base/Input/Search';

interface Props {
  className?: string;
}

// when Search Icon in Controoler clicked, toggle this Component with animation from bottom to above controller
class SearchModal extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className={ this.props.className } >
        <Search labelName="word-name-search" placeholder="search your word here..." />
      </div>
    );
  }
}

//interface IStyledProps extends Props {
  //theme: ThemeInterface;
//}

const StyledSearchModal = styled(SearchModal)`
  position: fixed;
  bottom: ${( props ) => props.theme.bottomBarHeight };
  width: 100%;
  background-color: #FFFFFF; 
`;


export default StyledSearchModal;


