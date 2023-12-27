import React from "react";
import { useContext } from "react";
import { CountContext } from "../App";
export const FamilyComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      FamilyComponentA[Count]: {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};
