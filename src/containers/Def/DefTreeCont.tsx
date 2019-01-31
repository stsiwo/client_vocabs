import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import DefTree from '../../representationals/business/Form/DefTree';
import { IState } from '../../state/type';
import { addNewDefActionCreator } from '../../actions/index';
import getNewNormalizedDef from '../../state/util/getNewNormalizedDef';
import { IDef } from '../../domains/def';

const mapStateToProps = (state: IState, ownProps: { defs: IDef[] }) => ({
});


const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: { defs: IDef[] } ) => ({
  addNewDefClick: ( wordId: string ): void => { dispatch( addNewDefActionCreator( getNewNormalizedDef(wordId), wordId))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( DefTree );



