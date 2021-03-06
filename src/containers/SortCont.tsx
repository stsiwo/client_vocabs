import { connect } from 'react-redux' 
import { AnyAction, Dispatch, compose } from 'redux';
import Sort from '../representationals/business/ModalContent/SortFilter/Sort';
import { IState } from '../state/type';
import { withRouter } from 'react-router-dom';
import sortIconChangeThunk from '../thunk/sortIconChange';
import { sort , ISort } from '../domains/sort';
import { SORT_ORDER } from '../enums/index';

const mapStateToProps = (state: IState, ownProps: {}) => {
  const { currentSort } = state;
  // change only current selected sort to true.
  // don't mutate Sort object (default: everything is false)
  const changedSort: ISort = Object.assign({}, sort, { [currentSort]: true })
  return {
    currentSort: changedSort,
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // when you send thunk function in dispach, you need "<any>"
  changeSort: (nextSort: SORT_ORDER ) => { dispatch<any>(sortIconChangeThunk(nextSort)) }, 
});

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( Sort );



