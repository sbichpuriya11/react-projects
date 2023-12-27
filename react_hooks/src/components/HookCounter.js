import React, { useState } from "react";

export const HooksCounter = () => {
  const [counter, setCounter] = useState(0);
  // console.log(useState(0));
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Hooks Counter: {counter}
      </button>
    </div>
  );
};
