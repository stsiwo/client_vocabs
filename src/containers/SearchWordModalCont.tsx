import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import SearchWordModal from '../representationals/business/SearchWordModal/SearchWordModal';
import { INormalizedState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { toggleSearchWordModalAction } from '../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  isSearchWordModalOpen: state.ui.isSearchWordModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSearchWordModalClick: ( isOpen: boolean ) => { dispatch( toggleSearchWordModalAction( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( SearchWordModal );




