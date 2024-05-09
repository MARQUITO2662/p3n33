import React, { useState } from 'react';
import BillInput from './BillInput';
import TipPercentageButtons from './TipPercentageButtons';
import PeopleInput from './PeopleInput';
import ResultDisplay from './ResultDisplay';
import ResetButton from './ResetButton';


const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const calculateTipAmount = () => {
    return (bill * tipPercentage) / 100;
  };

  const calculateTotal = () => {
    return bill + calculateTipAmount();
  };

  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setNumberOfPeople(1);
  };

  return (
    <div className="general-wrapper">
      <div className="data-wrapper">
        <BillInput value={bill} onChange={setBill} />
        <TipPercentageButtons value={tipPercentage} onChange={setTipPercentage} />
        <PeopleInput value={numberOfPeople} onChange={setNumberOfPeople} />
      </div>
      <div className="result-wrapper">
        <ResultDisplay
          tipAmount={calculateTipAmount() / numberOfPeople}
          total={calculateTotal() / numberOfPeople}
        />
        <ResetButton onClick={handleReset} />
      </div>
    </div>
  );
};

export default TipCalculator;
