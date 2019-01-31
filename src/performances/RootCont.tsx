import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import Root from './Root';
import initialStateFetchMainThunk from '../thunk/mains/initialStateFetch';
import { IState } from '../state/type';
import { toJS } from '../containers/toJS';

/***********************************************************
 * MSTP: must return original state ( not copy ) 
 *  - otherwise unnecessary re-render (calling render()) even if the state hasn't change at all
 ***********************************************************/
const mapStateToProps = (state: IState, ownProps: {}) => {
  return {
    isInitialWordsFetching: state.asyncs.get('isInitialWordsFetching'),
    words: state.entities.get('words'), 
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  initialWordsFetch: () => { dispatch<any>( initialStateFetchMainThunk() )},
});

export default connect( mapStateToProps, mapDispatchToProps )( toJS(Root) );

