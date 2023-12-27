import React, { useState } from "react";

export const HookCounterTwo = () => {
  const initialCount = 0;
  const [counter, setCounter] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 1; i <= 5; i++) setCounter((prevCount) => prevCount + 1);
  };

  const decrementFive = () => {
    for (let i = 1; i <= 5; i++) setCounter((prevCount) => prevCount - 1);
  };
  return (
    <div>
      Hook Count: {counter}
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(initialCount)}>Reset</button>
        <button onClick={incrementFive}>Increment 5</button>
        <button onClick={decrementFive}>Decrement 5</button>
      </div>
    </div>
  );
};
