import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const inCrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={inCrementCount}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
