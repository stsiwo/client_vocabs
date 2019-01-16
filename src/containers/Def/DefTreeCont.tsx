import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import DefTree from '../../representationals/business/Form/DefTree';
import { INormalizedState } from '../../state/type';
import { addNewDefActionCreator } from '../../actions/index';
import getNewNormalizedDef from '../../state/util/getNewNormalizedDef';
import { IDef } from '../../domains/def';

const mapStateToProps = (state: INormalizedState, ownProps: { defs: IDef[] }) => ({
  test: "test",
});


const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: { defs: IDef[] } ) => ({
  addNewDefClick: ( wordId: string ): void => { dispatch( addNewDefActionCreator( getNewNormalizedDef(wordId) ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( DefTree );



