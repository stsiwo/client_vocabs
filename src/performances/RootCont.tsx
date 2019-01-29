import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import Root from './Root';
import initialStateFetchMainThunk from '../thunk/mains/initialStateFetch';
import { denormalizeWordList } from '../state/index';
import { INormalizedState } from '../state/type';

/***********************************************************
 * MSTP: must return original state ( not copy ) 
 *  - otherwise unnecessary re-render (calling render()) even if the state hasn't change at all
 ***********************************************************/
const mapStateToProps = (state: INormalizedState, ownProps: {}) => {
  const wordIdList = Object.keys(state.entities.words); 
  return {
    isInitialWordsFetching: state.asyncs.isInitialWordsFetching,
    words: denormalizeWordList(wordIdList, state.entities), 
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  initialWordsFetch: () => { dispatch<any>( initialStateFetchMainThunk() )},
});

export default connect( mapStateToProps, mapDispatchToProps )( Root );

