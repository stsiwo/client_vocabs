import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import WordList from '../../representationals/business/WordList/WordList';
import { IState } from '../../state/type';
import withJSProps from '../../Hoc/withJSProps';
import { Record } from 'immutable';
import { OrderedSet } from 'immutable';
import initialStateFetchMainThunk from '../../thunk/mains/initialStateFetch';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => {
  return {
    displayedWordList: state.get('displayedWordList'),
    isInitialWordsFetching: state.get('asyncs').get('isInitialWordsFetching'),
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  initialWordsFetch: () => { dispatch<any>( initialStateFetchMainThunk() )},
});

interface Props {
  className?: string;
  displayedWordList: string[];
  initialWordsFetch: () => void;
  isInitialWordsFetching: boolean;
}

interface ImmProps {
  className?: string;
  displayedWordList: OrderedSet<string>;
  initialWordsFetch: () => void;
  isInitialWordsFetching: boolean;
}

export default connect( mapStateToProps, mapDispatchToProps )( withJSProps<ImmProps, Props>( WordList ));





