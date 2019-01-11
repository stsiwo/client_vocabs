import { connect } from 'react-redux' 
import { AnyAction, Dispatch } from 'redux';
import Button from '../representationals/base/Button/Button';
import { IWord } from '../domains/word';

const mapStateToProps = (state: IWord[], ownProps: {}) => ({
  prop: "prop",
});

const mapDispatchToProps = ( dispatch: Dispatch<AnyAction>, ownProps: {} ) => ({
  //incrementClick: (input: IWord) => { dispatch( addNewWordAction(input) )},
});

export default connect( mapStateToProps, mapDispatchToProps )( Button );
