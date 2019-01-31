import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import ResetButton from '../../representationals/business/Button/ResetButton';
import { IState } from '../../state/type';
import resetSortFilterWrapperThunk from '../../thunk/resetSortFilter';

const mapStateToProps = (state: IState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  resetSortFilterClick: () => { dispatch<any>( resetSortFilterWrapperThunk())}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( ResetButton );




