import { useState } from "react";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );
  const generateNewNumber = () => {
    const newNUmber = Math.floor(Math.random() * 100);
    setRandomNumber(newNUmber);
  };
  return (
    <div>
      <h1>Random number: {randomNumber}</h1>
      <button onClick={generateNewNumber}>Generate new number</button>
    </div>
  );
};

export default RandomNumber;
