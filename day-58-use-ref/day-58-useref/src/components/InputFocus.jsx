import React from "react";
import { useRef } from "react";

export default function InputFocus() {
  const inputUseref = useRef(null);

  const handleFocus = () => {
    inputUseref.current.focus();
  };

  const handleBlur = () => {
    inputUseref.current.blur();
  };

  return (
    <div>
      <input type="text" ref={inputUseref}></input>
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleBlur}>Blur</button>
    </div>
  );
}
