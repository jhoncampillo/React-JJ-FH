import React from "react";
import { useState } from "react";

export const CounterApp2 = () => {
  //const [counter, setCounter] = useState(100);
  const [counter, setCounter] = useState({
    counter1: 1,
    counter2: 10,
  });
  //desestructuro
  const { counter1, counter2 } = counter;

  console.log(counter);
  return (
    <div>
      <h1>Counter App 2</h1>
      <h2>Counter1 = {counter1}</h2>
      <h2>Counter2 = {counter2}</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          // conter trae el state actual
          setCounter({ ...counter, counter1: counter1 + 1 });
        }}
      >
        {" "}
        +1
      </button>
    </div>
  );
};
