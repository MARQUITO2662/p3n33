import React from "react";

function ButtonsIndex({ onChange }) {
  return (
    <ul>
      <li id="percentage-5">
        <button
          type="button"
          className="percentage-button"
          onClick={() => onChange(5)}
        >
          5%
        </button>
      </li>
      <li id="percentage-10">
        <button
          type="button"
          className="percentage-button"
          onClick={() => onChange(10)}
        >
          10%
        </button>
      </li>
      <li id="percentage-15">
        <button
          type="button"
          className="percentage-button"
          onClick={() => onChange(15)}
        >
          15%
        </button>
      </li>
      <li id="percentage-25">
        <button
          type="button"
          className="percentage-button"
          onClick={() => onChange(25)}
        >
          25%
        </button>
      </li>
      <li id="percentage-50">
        <button
          type="button"
          className="percentage-button"
          onClick={() => onChange(50)}
        >
          50%
        </button>
      </li>
      <li>
        <input
          type="number"
          placeholder="Custom"
          id="custom-percentage-button"
          className="percentage-button"
        />
      </li>
    </ul>
  );
}

export default ButtonsIndex;


