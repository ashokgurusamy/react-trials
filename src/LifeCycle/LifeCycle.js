import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello from constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Hello from before rendering");
  }
  componentDidMount() {
    console.log("Hello from after mounting");
  }
  render() {
    console.log("Hello from render");

    return <div>Gothrough the console for the better understanding</div>;
  }
}

export default LifeCycle;
