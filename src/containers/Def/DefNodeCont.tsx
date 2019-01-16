import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import DefNode from '../../representationals/business/Form/DefNode';
import { INormalizedState } from '../../state/type';
import { removeDefActionCreator } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
});


const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  removeDefClick: (wordId: string, defIds: string[]): void => { dispatch( removeDefActionCreator( wordId, defIds ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( DefNode );




