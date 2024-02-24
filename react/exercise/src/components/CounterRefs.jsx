import { useRef, useState } from "react";

const CounterRefs = () => {
  const [counter, setCounter] = useState(0);

  let cRef = useRef("")

  let handleClickInCounter = () => {
    setCounter(counter + 1);
    console.log(cRef = "up");
  };
  let handleClickDeCounter = () => {
    setCounter(counter - 1);
    console.log(cRef = "down");
  };
  let handleClickReCounter = () => {
    setCounter(0);
    console.log(cRef = "reset");
  };

  return (
    <div>
      <p ref={cRef}>i have counted to {counter}</p>
      <button  onClick={handleClickInCounter}>Increment</button>
      <button  onClick={handleClickDeCounter}>Decrement</button>
      <button  onClick={handleClickReCounter}>Reset</button>
    </div>
  );
};

export default CounterRefs;
