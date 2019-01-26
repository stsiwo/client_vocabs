import * as React from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
import ThirdChild from './ThirdChild';
import ListItem from './ListItem';

interface State {
  changeRoot: boolean;
  name: string;
  order: string[];
  first: string;
  second: string;
  third: string;
}

class Root extends React.PureComponent</*Props*/{}, State> {
  constructor(props: {}/*Props*/) {
    super(props);
    this.state = {
      changeRoot: true,
      name: "before",
      order: ["1","2","3"],
      first: "default",
      second: "default",
      third: "default",
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderFirstChild = this.renderFirstChild.bind(this);
    this.handleFirst = this.handleFirst.bind(this);
    this.handleSecond = this.handleSecond.bind(this);
    this.handleThird = this.handleThird.bind(this);
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
    console.log("Root mounted");
  }

  handleClick() {
    this.setState({ changeRoot: !this.state.changeRoot });
    //const name = (this.state.name == "before") ? "after" : "before";
    //this.setState({ name: name });
  }

  handleFirst() {
    this.setState({ first: "changed" });
  }

  handleSecond() {
    this.setState({ second: "changed" });
  }

  handleThird() {
    this.setState({ third: "changed" });
  }

  renderFirstChild() {
    return this.state.order.map(( item ) => <ListItem name={ item } />)
  }

  //render() {
    //console.log("Root is being rendering");
    //return (
      //<div className={ this.state.name }>
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

  render() {
    console.log("Root is being rendered");
    if (this.state.changeRoot) {
      return (
        <div className="before">
          <FirstChild name={ this.state.first }/>
          <SecondChild name={ this.state.second }/>
          <ThirdChild name={ this.state.third }/>
          <button type="button" onClick={ this.handleClick } >click</button>
          <button type="button" onClick={ this.handleFirst } >first</button>
          <button type="button" onClick={ this.handleSecond } >second</button>
          <button type="button" onClick={ this.handleThird } >third</button>
        </div>
      );
    } else {
      return (
        <div className="after">
          <FirstChild name={ this.state.first }/>
          <SecondChild name={ this.state.second }/>
          <ThirdChild name={ this.state.third }/>
          <button type="button" onClick={ this.handleClick } >click</button>
          <button type="button" onClick={ this.handleFirst } >click</button>
          <button type="button" onClick={ this.handleSecond } >click</button>
          <button type="button" onClick={ this.handleThird } >click</button>
        </div>
      );
    }
  }
}

export default Root;


