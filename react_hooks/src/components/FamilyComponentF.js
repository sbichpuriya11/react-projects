import React from "react";
import { useContext } from "react";
import { CountContext } from "../App";
export const FamilyComponentF = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      FamilyComponentF[Count]: {countContext.countState}
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
