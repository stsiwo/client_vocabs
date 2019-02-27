import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import Filter from '../representationals/business/ModalContent/SortFilter/Filter';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
import filterIconChangeThunk from '../thunk/filterIconChange';
import { PosEnum } from '../domains/pos';
import getCurrentFilterArraySelector from './reselects/getCurrentFilterArraySelector';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => {
  return {
    currentFilter: getCurrentFilterArraySelector(state, {}), 
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // when you send thunk function in dispach, you need "<any>"
  changeFilter: (nextFilter: PosEnum ) => { dispatch<any>(filterIconChangeThunk(nextFilter)) }, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( Filter );




