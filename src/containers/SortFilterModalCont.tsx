import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import SortFilterModal from '../representationals/business/SortFilterModal/SortFilterModal';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { toggleSortFilterModalActionCreator } from '../actions/index';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  isSortFilterModalOpen: state.get('ui').get('isSortFilterModalOpen'),
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSortFilterModalClick: ( isOpen: boolean ) => { dispatch( toggleSortFilterModalActionCreator( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( SortFilterModal );
