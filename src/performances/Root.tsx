import * as React from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
import ThirdChild from './ThirdChild';
import ListItem from './ListItem';

interface State {
  changeRoot: boolean;
  name: string;
  order: string[];
}

class Root extends React.Component</*Props*/{}, State> {
  constructor(props: {}/*Props*/) {
    super(props);
    this.state = {
      changeRoot: true,
      name: "before",
      order: ["1","2","3"],
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderFirstChild = this.renderFirstChild.bind(this);
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
          <FirstChild />
          <SecondChild />
          <ThirdChild />
          <button type="button" onClick={ this.handleClick } >click</button>
        </div>
      );
    } else {
      return (
        <div className="after">
          <FirstChild />
          <SecondChild />
          <ThirdChild />
          <button type="button" onClick={ this.handleClick } >click</button>
        </div>
      );
    }
  }
}

export default Root;


