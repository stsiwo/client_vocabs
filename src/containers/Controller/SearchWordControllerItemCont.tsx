import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import SearchWordControllerItem from '../../representationals/business/Controller/SearchWordControllerItem';
import { IState } from '../../state/type';
import toggleSearchWordModalWrapperThunk from '../../thunk/toggleSearchWordModal';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
  isSearchWordModalOpen: state.get('ui').get('isSearchWordModalOpen'),
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSearchWordModalClick: ( isOpen: boolean ) => { dispatch<any>(toggleSearchWordModalWrapperThunk())}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchWordControllerItem );





