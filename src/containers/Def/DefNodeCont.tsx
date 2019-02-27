import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import DefNode from '../../representationals/business/Form/DefNode';
import { IState } from '../../state/type';
import { ArrayHelpers } from 'formik';
import removeDefFormThunk from '../../thunk/removeDefForm';
import { Record } from 'immutable';

const mapStateToProps = (state: Record<IState>, ownProps: {}) => ({
});


const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  removeDefClick: (arrayHelpers: ArrayHelpers, wordIndex: number, defIndex: number): void => { dispatch<any>( removeDefFormThunk( arrayHelpers, wordIndex, defIndex ))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( DefNode );




