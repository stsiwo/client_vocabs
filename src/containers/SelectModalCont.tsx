import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import SelectModal from '../representationals/business/SelectModal/SelectModal';
import { INormalizedState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { toggleSelectWarningModalAction } from '../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  isSelectWarningModalOpen: state.ui.isSelectWarningModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSelectWarningModalClick: ( isOpen: boolean ) => { dispatch( toggleSelectWarningModalAction( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( SelectModal );


