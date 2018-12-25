import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import Button from '../representationals/base/Button/Button';
import { State } from '../state';
import { addNewWordAction } from '../actions'; 

const mapStateToProps = (state: State, ownProps: {}) => ({
  prop: "prop",
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  incrementClick: (input: string) => { dispatch( addNewWordAction(input) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( Button );
