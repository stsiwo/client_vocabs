import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import Root from './Root';
import initialStateFetchMainThunk from '../thunk/mains/initialStateFetch';
import { IState } from '../state/type';
import withJSProps from '../Hoc/withJSProps';
import { IWord, IWordImm } from '../domains/word';
import { List } from 'immutable';

/***********************************************************
 * MSTP: must return original state ( not copy ) 
 *  - otherwise unnecessary re-render (calling render()) even if the state hasn't change at all
 ***********************************************************/
const mapStateToProps = (state: IState, ownProps: {}) => {
  console.log(state.entities.get('words')) 
  return {
    isInitialWordsFetching: state.asyncs.get('isInitialWordsFetching'),
    words: state.entities.get('words').toList(), 
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  initialWordsFetch: () => { dispatch<any>( initialStateFetchMainThunk() )},
});

interface Props {
  isInitialWordsFetching: boolean;
  words: IWord[];
  initialWordsFetch: () => void;
}

interface ImmProps {
  isInitialWordsFetching: boolean;
  words: List<IWordImm>;
  initialWordsFetch: () => void;
}

export default connect( mapStateToProps, mapDispatchToProps )( withJSProps<ImmProps, Props>(Root) );

