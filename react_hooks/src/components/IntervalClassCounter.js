import React, { Component } from "react";

export class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return <div>Class Counter: {this.state.counter}</div>;
  }
}
