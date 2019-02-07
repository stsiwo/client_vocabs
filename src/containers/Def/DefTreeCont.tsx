import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import DefTree from '../../representationals/business/Form/DefTree';
import { IState } from '../../state/type';
import { IDef } from '../../domains/def';
import addNewDefFormThunk from '../../thunk/addNewDefForm';
import { ArrayHelpers } from 'formik';

const mapStateToProps = (state: IState, ownProps: { defs: IDef[] }) => ({
});


const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: { defs: IDef[] } ) => ({
  addNewDefClick: (arrayHelpers: ArrayHelpers, wordIndex: number) => { dispatch<any>( addNewDefFormThunk(arrayHelpers, wordIndex))}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( DefTree );



