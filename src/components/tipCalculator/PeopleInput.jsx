import React from 'react';


const PeopleInput = ({ value, onChange }) => {
  return (
    <>
      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <input
          className="input-people"
          id="input-people"
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          min="1"
        />
      </label>
    </>
  );
};

export default PeopleInput;
