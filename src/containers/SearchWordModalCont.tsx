import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import SearchWordModal from '../representationals/business/SearchWordModal/SearchWordModal';
import { INormalizedState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { searchKeyWordAction } from '../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  searchKeyWord: state.searchKeyWord,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  changeSearchKeyWord: ( nextSearchKey: string ) => { dispatch( searchKeyWordAction( nextSearchKey ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( SearchWordModal );




