import React from 'react';


const ResetButton = ({ onClick }) => {
  return (
    <button type="button" id="reset-button" className="reset-button" onClick={onClick}>
      RESET
    </button>
  );
};

export default ResetButton;
