import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value
      };
    case "decrement":
      return {
        ...state,
        firstCounter: state.firstCounter - action.value
      };
    case "reset":
      return initialState;
    case "increment2":
      return {
        ...state,
        secondCounter: state.secondCounter + action.value
      };
    case "decrement2":
      return {
        ...state,
        secondCounter: state.secondCounter - action.value
      };
    default:
      return state;
  }
};
export const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        Counter 1: {count.firstCounter} {" | "}
        Counter 2: {count.secondCounter}
      </div>
      <br />
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        IncrementFive
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        DecrementFive
      </button>
      <br />
      <br />
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement Counter 2
        </button>
      </div>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
