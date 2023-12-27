import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [counter, setCounter] = useState(0);

  const tick = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Hook Counter: {counter}</div>;
};

export default IntervalHookCounter;
