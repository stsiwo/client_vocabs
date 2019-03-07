import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose */ } from 'redux';
import BackControllerItem from '../../representationals/business/Controller/BackControllerItem';
import { IState } from '../../state/type';
import backToWordPageThunk from '../../thunk/backToWordPageThunk';

const mapStateToProps = (state: IState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  backWordClick: () => { dispatch<any>(backToWordPageThunk('/word'))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( BackControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( BackControllerItem );





