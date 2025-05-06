import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show, setShow] = useState(true);

  function handleChange(e) {
    setShow(e.target.checked);
  }

  return (
    <div>
      {show ? <Counter /> : <p>Hilang</p>}
      <input type="checkbox" checked={show} onChange={handleChange} />
    </div>
  );
}
