import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import DefNode from '../../representationals/business/Form/DefNode';
import { INormalizedState } from '../../state/type';
import { removeDefAction } from '../../actions/index';

const mapStateToProps = (state: INormalizedState, ownProps: {}) => ({
});


const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  removeDefClick: (wordId: string, defId: string): void => { dispatch( removeDefAction( wordId, defId ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( DefNode );




