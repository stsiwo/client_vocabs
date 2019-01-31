import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import WordListItem from '../../representationals/business/WordListItem/WordListItem';
import { IState } from '../../state/type';
import { toggleSelectedWordListActionCreator } from '../../actions/index';

const mapStateToProps = (state: IState, ownProps: {}) => ({
  // N/A
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  toggleSelectWordChange: ( nextSelectedWordList: string ) => { dispatch( toggleSelectedWordListActionCreator( nextSelectedWordList ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( WordListItem )




