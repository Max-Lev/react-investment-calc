import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  useEffect(() => {
    console.log('effect userIput', userInput);
  }, [userInput]);

  const setUserInputHandler = (inputIdentifier, event) => {
    const { value } = event.target;
    setUserInput((prevState) => ({ ...prevState, [inputIdentifier]: Number(value) }));
  }

  const isInputValid = userInput.duration >=1;


  return <>
    <Header />
    <UserInput userInput={userInput} onUserInput={setUserInputHandler} />
    {isInputValid && <Results userInput={userInput} /> }
    {!isInputValid && <p className='center'>Invalid duration</p> }
    
  </>
}

export default App
