import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import DefineWarningModal from '../representationals/business/DefineWarningModal/DefineWarningModal';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { toggleDefineWarningModalActionCreator } from '../actions/index';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  isDefineWarningModalOpen: state.get('ui').get('isDefineWarningModalOpen'),
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleDefineWarningModalClick: ( isOpen: boolean ) => { dispatch( toggleDefineWarningModalActionCreator( isOpen ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( DefineWarningModal );



