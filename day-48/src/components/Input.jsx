import { useState } from "react";

export default function Input({ label, value, onChange }) {
  return (
    <div>
      <form>
        <label>{label}</label>
        <input
          type="text"
          name="text"
          onChange={onChange}
          value={value}
        ></input>
      </form>
    </div>
  );
}
