import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
function App() {
  const [investmentValue, setInvestmentValue] = useState(500);

  useEffect(() => {
    console.log('effect investmentValue', investmentValue);
  }, [investmentValue]);

  const setAmountHandler = (amount) => {
    setInvestmentValue(amount);
  }


  return <>
    <Header />
    <UserInput
      investmentValue={investmentValue}
      setInvestmentValue={setAmountHandler} />
  </>;
}

export default App
