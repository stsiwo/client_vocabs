import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose */} from 'redux';
import SelectAllControllerItem from '../../representationals/business/Controller/SelectAllControllerItem';
import { INormalizedState } from '../../state/type';
import { selectAllWordAction } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
  sortedWordList: state.sortedWordList,
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  selectAllWordClick: ( nextSelectedWordList: number[] ) => { dispatch( selectAllWordAction( nextSelectedWordList ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( SelectAllControllerItem );




