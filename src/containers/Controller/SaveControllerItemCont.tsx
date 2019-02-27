import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import SaveControllerItem from '../../representationals/business/Controller/SaveControllerItem';
import { IState } from '../../state/type';
import updateWordsThunk from '../../thunk/updateWordsThunk';
import { IWord } from '../../domains/word';

/**
 * Save ajax action
 **/
const mapStateToProps = (state: IState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  saveWordsClick: (wordForm: IWord[]) => { dispatch<any>(updateWordsThunk(wordForm)) },
});

export default connect( mapStateToProps, mapDispatchToProps )( SaveControllerItem );






