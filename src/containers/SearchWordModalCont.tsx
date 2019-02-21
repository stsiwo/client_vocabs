import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import SearchWordModal from '../representationals/business/ModalContent/SearchWordModal';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
import searchKeyWordChangeThunk from '../thunk/searchKeyWordChange'; 

const mapStateToProps = (state: IState, ownProps: {}) => ({
  searchKeyWord: state.searchKeyWord,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  changeSearchKeyWord: ( nextSearchKey: string ) => { dispatch<any>( searchKeyWordChangeThunk( nextSearchKey ))}, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( SearchWordModal );




