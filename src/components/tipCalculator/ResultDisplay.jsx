import React from 'react';


const ResultDisplay = ({ tipAmount, total }) => {
  return (
    <div className="result-txt">
      <div className="text-amount">
        <div>
          <h2>Tip Amount</h2>
          <p>/ person</p>
        </div>
        <h3>$<span id="tip-amount">{tipAmount.toFixed(2)}</span></h3>
      </div>
      <div className="total-amount">
        <div>
          <h2>Total</h2>
          <p>/ person</p>
        </div>
        <h3>$<span id="total">{total.toFixed(2)}</span></h3>
      </div>
    </div>
  );
};

export default ResultDisplay;
