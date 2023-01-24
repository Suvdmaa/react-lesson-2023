import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function Fancy() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div className="App">
      <Counter isFancy={isFancy} setIsFancy={setIsFancy} />
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        ></input>
        Use Fancy Styling
      </label>

      <Counter isFancy={isFancy} />
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        ></input>
        Use Fancy Styling
      </label>
    </div>
  );
}

export default Fancy;
