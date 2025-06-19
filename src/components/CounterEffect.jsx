import { useState } from "react";
import { useEffect } from "react";

const CounterEffect = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleClick = () => {
    setCount((count += 1));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default CounterEffect;
