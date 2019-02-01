import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import EditControllerItem from '../../representationals/business/Controller/EditControllerItem';
import { IState } from '../../state/type';
import moveToEditPageThunk from '../../thunk/moveToEditPageThunk';
//import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: IState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  moveToEditPageClick: () => { dispatch<any>( moveToEditPageThunk('/word/detail') )}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( EditControllerItem );
//export default compose(
  //withRouter, 
  //connect( mapStateToProps, mapDispatchToProps )
//)( EditControllerItem );



