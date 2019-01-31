import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import SearchWordModal from '../representationals/business/SearchWordModal/SearchWordModal';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { changeSearchKeyWordWrapperThunk } from '../reducers/thunk';

const mapStateToProps = (state: IState, ownProps: {}) => ({
  searchKeyWord: state.searchKeyWord,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  changeSearchKeyWord: ( nextSearchKey: string ) => { dispatch<any>( changeSearchKeyWordWrapperThunk( nextSearchKey ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( SearchWordModal );




