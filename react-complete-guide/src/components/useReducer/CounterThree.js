import React, { useReducer } from "react";
import { UseReducer } from "react";
import CounterTwo from "./CounterTwo";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  const [counterTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <p> Count - {counter}</p>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
        <p> Count Two - {counterTwo}</p>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
