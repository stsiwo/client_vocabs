import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import Filter from '../representationals/business/SortFilterModal/Filter';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
import { changeFilterWrapperThunk } from '../reducers/thunk';
import { filter } from '../domains/filter';
import { PosEnum } from '../domains/pos';

const mapStateToProps = (state: IState, ownProps: {}) => {
  const { currentFilter } = state;
  const filterCopyObject = Object.assign({}, filter);
  currentFilter.forEach(( pos ) => filterCopyObject[pos] = true ); 
    
  return {
    currentFilter: filterCopyObject,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // when you send thunk function in dispach, you need "<any>"
  changeFilter: (nextFilter: PosEnum[] ) => { dispatch<any>(changeFilterWrapperThunk(nextFilter)) }, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( Filter );




