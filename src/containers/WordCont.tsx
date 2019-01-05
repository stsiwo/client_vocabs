import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import Word from '../representationals/business/Word/Word';
import { INormalizedState } from '../state/type';
import { withRouter } from 'react-router-dom';
//import { toggleSelectWarningModalAction } from '../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => {

  return {
    isSelectWarningModalOpen: state.ui.isSelectWarningModalOpen,
    isDeleteConfirmModalOpen: state.ui.isDeleteConfirmModalOpen,
    isSortFilterModalOpen: state.ui.isSortFilterModalOpen,
    isSearchWordModalOpen: state.ui.isSearchWordModalOpen,
  }
};


const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  //toggleSelectWarningModalClick: ( isOpen: boolean ): void => { dispatch( toggleSelectWarningModalAction( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( Word );

