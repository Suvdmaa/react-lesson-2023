import { useState } from "react";

export default function Counter(props) {
  const [sum, setSum] = useState(0);
  const [style, setStyle] = useState(false);

  return (
    <div
      className={style ? "counter hover" : "counter"}
      onPointerEnter={() => setStyle(true)}
      onPointerLeave={() => setStyle(false)}
    >
      <h1>{sum}</h1>
      <button
        onClick={() => {
          setSum(sum + 1);
        }}
      >
        Add one
      </button>
    </div>
  );
}
