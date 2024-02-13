import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  let handleClickInCounter = () => {
    setCounter(counter + 1);
  };
  let handleClickDeCounter = () => {
    setCounter(counter - 1);
  };
  let handleClickReCounter = () => {
    setCounter(0);
  };

  return (
    <div>
      <p>i have counted to {counter}</p>
      <button onClick={handleClickInCounter}>Increment</button>
      <button onClick={handleClickDeCounter}>Decrement</button>
      <button onClick={handleClickReCounter}>Reset</button>
    </div>
  );
};

export default Counter;
