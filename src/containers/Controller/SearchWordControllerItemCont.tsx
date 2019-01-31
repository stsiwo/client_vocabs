import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import SearchWordControllerItem from '../../representationals/business/Controller/SearchWordControllerItem';
import { IState } from '../../state/type';
import toggleSearchWordModalWrapperThunk from '../../thunk/toggleSearchWordModal';

const mapStateToProps = (state: IState, ownProps: {}) => ({
  isSearchWordModalOpen: state.ui.isSearchWordModalOpen,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSearchWordModalClick: ( isOpen: boolean ) => { dispatch<any>(toggleSearchWordModalWrapperThunk())}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchWordControllerItem );





