import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import SelectModal from '../representationals/business/SelectModal/SelectModal';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { toggleSelectWarningModalActionCreator } from '../actions/index';

const mapStateToProps = (state: IState, ownProps: {}) => ({
  isSelectWarningModalOpen: state.ui.isSelectWarningModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSelectWarningModalClick: ( isOpen: boolean ) => { dispatch( toggleSelectWarningModalActionCreator( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( SelectModal );


