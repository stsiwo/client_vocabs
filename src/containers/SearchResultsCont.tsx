import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import SearchResults from '../representationals/business/ModalContent/SearchImage/SearchResults';
import { IState } from '../state/type';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState> , ownProps: { wordId: string }) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchResults );




