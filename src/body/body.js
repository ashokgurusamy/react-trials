import React from "react";
import "./body.css";
// import { super } from "@babel/types";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xName: "",
      yAge: null
    };
  }

  handleEvent = event => {
    let GetName = event.target.name;
    let GetAge = event.target.value;
    this.setState({ [GetName]: GetAge });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.username);
    fetch("http://reqres.in/api/users", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        name: event.target.name
      }
    });
  };

  render() {
    return (
      <div className="bodyDiv">
        <div className="headerDiv">
          <h1>Hey this is Header !!</h1>
        </div>
        <h1>
          Hey {this.state.username} {this.state.age}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter the search to text" />
          <input
            name="username"
            type="text"
            placeholder="Enter your Name"
            onChange={this.handleEvent}
          />
          <input
            name="age"
            type="number"
            placeholder="Enter the Age in Numbers"
            onChange={this.handleEvent}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Body;
