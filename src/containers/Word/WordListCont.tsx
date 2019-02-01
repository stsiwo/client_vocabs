import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import WordList from '../../representationals/business/WordList/WordList';
import { IState } from '../../state/type';
import { getWordListItem } from '../../reducers/helper';
import withJSProps from '../../Hoc/withJSProps';
import { Record } from 'immutable';
import { IWordListItem } from '../../domains/word';
import { OrderedSet } from 'immutable';
import initialStateFetchMainThunk from '../../thunk/mains/initialStateFetch';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => {
  // get state (displayedWordList and selectedWordList)
  const selectedWordList = state.get('selectedWordList');
  const entities = state.get('entities');
  const displayedWordList = state.get('displayedWordList');
  // convert displayedWordList to [IWordListItem] see word.ts in domains
  const wordListItem = getWordListItem(displayedWordList, selectedWordList, entities);  
  // send that IWordListItem[] as props
  return {
    wordListItem: wordListItem,
    isInitialWordsFetching: state.get('asyncs').get('isInitialWordsFetching'),
  }
};

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  initialWordsFetch: () => { dispatch<any>( initialStateFetchMainThunk() )},
});

interface Props {
  className?: string;
  wordListItem: IWordListItem[];
  initialWordsFetch: () => void;
  isInitialWordsFetching: boolean;
}

interface ImmProps {
  className?: string;
  wordListItem: OrderedSet<IWordListItem>;
  initialWordsFetch: () => void;
  isInitialWordsFetching: boolean;
}

export default connect( mapStateToProps, mapDispatchToProps )( withJSProps<ImmProps, Props>( WordList ));





