import { connect } from 'react-redux' 
import { AnyAction, Dispatch/*, compose*/ } from 'redux';
import SaveControllerItem from '../../representationals/business/Controller/SaveControllerItem';
import { IState } from '../../state/type';
import updateWordsThunk from '../../thunk/updateWordsThunk';
import { FormValues } from '../../Hoc/withForm'; 

/**
 * Save ajax action
 **/
const mapStateToProps = (state: IState, ownProps: {}) => ({
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  saveWordsClick: (formInput: FormValues) => { dispatch<any>(updateWordsThunk(formInput)) },
});

export default connect( mapStateToProps, mapDispatchToProps )( SaveControllerItem );






