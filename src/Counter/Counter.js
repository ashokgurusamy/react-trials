import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>Make +1</button>
        <h1>The counter value is: {this.state.counter}</h1>
      </div>
    );
  }
}
export default Counter;
