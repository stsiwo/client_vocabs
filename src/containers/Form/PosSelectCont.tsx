import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import PosSelect from '../../representationals/business/Form/PosSelect';
import { INormalizedState } from '../../state/type';
import { updateDefPosActionCreator } from '../../actions/index';
import { PosEnum } from '../../domains/pos';

const mapStateToProps = (state: INormalizedState , ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  // dispatch updateDefActionCreator 
  updateDefPosChange: ( id: string, nextPos: PosEnum ) => { dispatch( updateDefPosActionCreator( id, nextPos ) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( PosSelect );

