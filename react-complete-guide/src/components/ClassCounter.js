import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increamentCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.increamentCount}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
