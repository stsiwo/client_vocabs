import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import SortFilterControllerItem from '../../representationals/business/Controller/SortFilterControllerItem';
import { IState } from '../../state/type';
import { toggleSortFilterModalActionCreator } from '../../actions/index';
import openModalWrapperThunk from '../../thunk/openModal';

const mapStateToProps = (state: IState, ownProps: {}) => ({
  isSortFilterModalOpen: state.ui.isSortFilterModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSortFilterModalClick: ( isOpen: boolean ) => { dispatch<any>( openModalWrapperThunk( toggleSortFilterModalActionCreator ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( SortFilterControllerItem );

