import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import SelectModal from '../representationals/business/ModalContent/SelectModal';
import { IState } from '../state/type';
import { toggleSelectWarningModalActionCreator } from '../actions/index';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  isSelectWarningModalOpen: state.get('ui').get('isSelectWarningModalOpen'),
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSelectWarningModalClick: ( isOpen: boolean ) => { dispatch( toggleSelectWarningModalActionCreator( isOpen ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( SelectModal );


  

