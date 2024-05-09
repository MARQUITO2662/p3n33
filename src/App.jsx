import React, { useState } from "react";
import TipCalculator from "./components/tipCalculator/TipCalculator";
import ButtonsIndex from "./components/buttons/index";

function App() {
  const [tipPercentage, setTipPercentage] = useState(0);

  const handleTipChange = (percentage) => {
    setTipPercentage(percentage);
  };

  return (
    <div className="App">
      <TipCalculator tipPercentage={tipPercentage} />
      {/* <ButtonsIndex onChange={handleTipChange} /> */}
    </div>
  );
}

export default App;
