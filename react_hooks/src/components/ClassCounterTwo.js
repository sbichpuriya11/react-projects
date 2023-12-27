import React, { Component } from "react";

export class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementFive = () => {
    for (let i = 1; i <= 5; i++) {
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
    }
  };
  decrementFive = () => {
    for (let i = 1; i <= 5; i++) {
      this.setState((prevState) => {
        return { counter: prevState.counter - 1 };
      });
    }
  };

  render() {
    return (
      <div>
        Count: {this.state.counter}
        <div>
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            Increment
          </button>
          <button
            onClick={() => this.setState({ counter: this.state.counter - 1 })}
          >
            Decrement
          </button>
          <button onClick={() => this.setState({ counter: 0 })}>Reset</button>
          <button onClick={this.incrementFive}>Increment 5</button>
          <button onClick={this.decrementFive}>Decrement 5</button>
        </div>
      </div>
    );
  }
}
