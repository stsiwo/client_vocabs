import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import Word from '../representationals/business/Word/Word';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
//import { toggleSelectWarningModalActionCreator } from '../actions/index';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => {

  return {
    isSelectWarningModalOpen: state.get('ui').get('isSelectWarningModalOpen'),
    isDeleteConfirmModalOpen: state.get('ui').get('isDeleteConfirmModalOpen'),
    isSortFilterModalOpen: state.get('ui').get('isSortFilterModalOpen'),
    isSearchWordModalOpen: state.get('ui').get('isSearchWordModalOpen'),
  }
};


const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  //toggleSelectWarningModalClick: ( isOpen: boolean ): void => { dispatch( toggleSelectWarningModalActionCreator( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( Word );

