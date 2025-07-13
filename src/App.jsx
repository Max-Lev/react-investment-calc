import React, { useState,useEffect } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
function App() {
  const [amountValue, setAmountValue] = useState(500);
  
  useEffect(() => {
    console.log('effect amountValue',amountValue);
  }, [amountValue]);

  const setAmountHandler = (amount) => {
    setAmountValue(amount);
  }
  

  return <>
    <Header />
    <UserInput amountValue={amountValue} setAmountValue={setAmountHandler} />
  </>;
}

export default App
