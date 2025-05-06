import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <div>
        <h1>Counter : {counter}</h1>
      </div>
    </div>
  );
}
