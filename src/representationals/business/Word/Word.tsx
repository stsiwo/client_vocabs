import * as React from 'react';
import styled from '../../story/styledComponents';
import WordListCont from '../../../containers/Word/WordListCont';
import MediaQuery from 'react-responsive';
import { Route, Redirect } from 'react-router-dom';
import WordDetailCont from '../../../containers/Word/WordDetailCont';
import Controller from '../Controller/Controller';
import SelectModalCont from '../../../containers/SelectModalCont';
import DeleteModalCont from '../../../containers/DeleteModalCont';
import SortFilterModalCont from '../../../containers/SortFilterModalCont';
import SearchWordModalCont from '../../../containers/SearchWordModalCont';
import { RouteComponentProps } from 'react-router-dom';
import ProtectedRoute from '../../../Hoc/ProtectedRoute';

interface Props extends RouteComponentProps {
  className?: string;
  isSelectWarningModalOpen: boolean;
  isDeleteConfirmModalOpen: boolean;
  isSortFilterModalOpen: boolean;
  isSearchWordModalOpen: boolean;
}


export class Word extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
      {/*
        values props are for testing purpose 
        */}
        <MediaQuery maxWidth={ 425 } values={{ width: 300 }}>
          <ProtectedRoute exact path="/word" component={ WordListCont } />
          <Route path="/word/detail" component={ WordDetailCont } />
        </MediaQuery>
        <MediaQuery minWidth={ 426 }>
          <Route path="/word" component={ WordListCont } /> 
          <Route path="/word/detail" component={ WordDetailCont } />
          <Redirect from="/word" to="/word/detail" />
          <Controller />
        </MediaQuery>
        { this.props.isSelectWarningModalOpen && <SelectModalCont /> }
        { this.props.isDeleteConfirmModalOpen && <DeleteModalCont /> }
        { this.props.isSortFilterModalOpen && <SortFilterModalCont /> }
        { this.props.isSearchWordModalOpen && <SearchWordModalCont /> }
      </div>
    );
  }
}

const StyledWord = styled(Word)`
`;
StyledWord.displayName = "WordSelector";


export default StyledWord;






