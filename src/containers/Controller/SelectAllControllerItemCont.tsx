import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose */} from 'redux';
import SelectAllControllerItem from '../../representationals/business/Controller/SelectAllControllerItem';
import { IState } from '../../state/type';
import selectAllIconClickWrapperThunk from '../../thunk/selectAllIconClick';

const mapStateToProps = (state: IState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  selectAllWordClick: () => { dispatch<any>(selectAllIconClickWrapperThunk())}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( SelectAllControllerItem );




