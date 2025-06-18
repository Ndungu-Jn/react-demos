import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const CounterClicked = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  };

  return (
    <div>
      <button onClick={CounterClicked}>Increment</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default Counter;
