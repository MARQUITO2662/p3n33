import React from 'react';


const BillInput = ({ value, onChange }) => {
  return (
    <>
      <h1>Bill</h1>
      <label htmlFor="input-bill">
        <input
          className="input-bill"
          id="input-bill"
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          min="0"
        />
      </label>
    </>
  );
};

export default BillInput;
