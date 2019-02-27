import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import SearchImageModalContent from '../representationals/business/ModalContent/SearchImage/SearchImageModalContent';
import { IState } from '../state/type';
//import { updateDefActionCreator } from '../actions/index';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: { wordId: string, defId: string }) => ({
   wordName: state.get('entities').getIn([ 'words', ownProps.wordId, name ]),
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // updateDefImageActionCreator is in SearchResultsCont
  //updateDefChange: ( id: string, nextFile: string ) => { dispatch( updateDefActionCreator( id, nextFile ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchImageModalContent );



