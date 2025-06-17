import React from "react";

const Greeting = () => {
  const greeting = "Hello you";
  const dateNow = new Date();

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{dateNow.getDate()}</p>
    </div>
  );
};

export default Greeting;
