import * as React from 'react';
//import FirstChild from './FirstChild';
//import SecondChild from './SecondChild';
//import ThirdChild from './ThirdChild';
//import ListItem from './ListItem';
import { IWord } from '../domains/word';

interface Props {
  isInitialWordsFetching: boolean;
  words: IWord[];
  initialWordsFetch: () => void;
}

class Root extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    //this.props = {
      //changeRoot: true,
      //name: "before",
      //order: ["1","2","3"],
      //first: "default",
      //second: "default",
      //third: "default",
    //}
    //this.handleClick = this.handleClick.bind(this);
    //this.renderFirstChild = this.renderFirstChild.bind(this);
    //this.handleFirst = this.handleFirst.bind(this);
    //this.handleSecond = this.handleSecond.bind(this);
    //this.handleThird = this.handleThird.bind(this);
    this.renderWords = this.renderWords.bind(this);
  }

  componentWillUpdate() {
    console.log("Root will update");
  }

  componentWillReceiveProps() {
    console.log("Root will receive props");
  }

  componentWillUnmount() {
    console.log("Root will be unmounted soon");
  }

  componentWillMount() {
    console.log("Root will be mounted soon");
  }

  componentDidMount() {
    this.props.initialWordsFetch();
  }

  //handleClick() {
    //this.setState({ changeRoot: !this.props.changeRoot });
    ////const name = (this.props.name == "before") ? "after" : "before";
    ////this.setState({ name: name });
  //}

  //handleFirst() {
    //this.setState({ first: "changed" });
  //}

  //handleSecond() {
    //this.setState({ second: "changed" });
  //}

  //handleThird() {
    //this.setState({ third: "changed" });
  //}

  //renderFirstChild() {
    //return this.props.order.map(( item ) => <ListItem name={ item } />)
  //}
  renderWords() {
    return this.props.words.map(( word: IWord ) => <div>{ `word id: ${ word.id } and word name ${ word.name }` }</div>);
  }

  render() {
    if (this.props.isInitialWordsFetching) return <div>loading</div>;

    return (
      <div>
        { this.renderWords() } 
      </div>
    );
  }



  //render() {
    //console.log("Root is being rendering");
    //return (
      //<div className={ this.props.name }>
      //{[>
        //{ this.renderFirstChild() }
        //*/}
        //<FirstChild />
        //<SecondChild />
        //<ThirdChild />
        //<button type="button" onClick={ this.handleClick } >click</button>
      //</div>
    //);
  //}

  //render() {
    //console.log("Root is being rendered");
    //if (this.props.changeRoot) {
      //return (
        //<div className="before">
          //<FirstChild name={ this.props.first }/>
          //<SecondChild name={ this.props.second }/>
          //<ThirdChild name={ this.props.third }/>
          //<button type="button" onClick={ this.handleClick } >click</button>
          //<button type="button" onClick={ this.handleFirst } >first</button>
          //<button type="button" onClick={ this.handleSecond } >second</button>
          //<button type="button" onClick={ this.handleThird } >third</button>
        //</div>
      //);
    //} else {
      //return (
        //<div className="after">
          //<FirstChild name={ this.props.first }/>
          //<SecondChild name={ this.props.second }/>
          //<ThirdChild name={ this.props.third }/>
          //<button type="button" onClick={ this.handleClick } >click</button>
          //<button type="button" onClick={ this.handleFirst } >click</button>
          //<button type="button" onClick={ this.handleSecond } >click</button>
          //<button type="button" onClick={ this.handleThird } >click</button>
        //</div>
      //);
    //}
  //}
}

export default Root;


