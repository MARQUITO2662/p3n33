import React, { useState } from 'react';

const TipPercentageButtons = ({ value, onChange }) => {
  const [customPercentage, setCustomPercentage] = useState('');

  const handleCustomPercentage = (e) => {
    const input = e.target.value;
    if (!isNaN(input)) {
      setCustomPercentage(input);
      onChange(parseFloat(input));
    }
  };

  const handleButtonClick = (percentage) => {
    setCustomPercentage(percentage === 0 ? '' : '0');
    onChange(percentage);
  };

  return (
    <>
      <h2>Select Tip %</h2>
      <ul>
        <li id="percentage-5">
          <button
            type="button"
            className="percentage-button"
            value="5"
            onClick={() => handleButtonClick(5)}
          >
            5%
          </button>
        </li>
        <li id="percentage-10">
          <button
            type="button"
            className="percentage-button"
            value="10"
            onClick={() => handleButtonClick(10)}
          >
            10%
          </button>
        </li>
        <li id="percentage-15">
          <button
            type="button"
            className="percentage-button"
            value="15"
            onClick={() => handleButtonClick(15)}
          >
            15%
          </button>
        </li>
        <li id="percentage-25">
          <button
            type="button"
            className="percentage-button"
            value="25"
            onClick={() => handleButtonClick(25)}
          >
            25%
          </button>
        </li>
        <li id="percentage-50">
          <button
            type="button"
            className="percentage-button"
            value="50"
            onClick={() => handleButtonClick(50)}
          >
            50%
          </button>
        </li>
        <li>
          <input
            type="number"
            placeholder={customPercentage === '0' ? '0' : 'Custom'}
            id="custom-percentage-button"
            className="percentage-button"
            value={customPercentage}
            onChange={handleCustomPercentage}
          />
        </li>
      </ul>
    </>
  );
};

export default TipPercentageButtons;
