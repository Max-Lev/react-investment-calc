import React, { useState, useEffect } from 'react';
import Input from './Input';
export default function UserInput({ onCalculate, investmentValue, setInvestmentValue, ...props }) {

    const [userIput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    useEffect(() => {
        console.log('effect userIput', userIput);
    }, [userIput]);


    // This function is called when the sum input field is changed
    const handleChange = (inputIdentifier, event) => {
        const { value } = event.target;
        console.log(inputIdentifier, value)
        setUserInput((prevState) => ({
            ...prevState,
            [inputIdentifier]: Number(value)
        }));
    }

    return <>
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <Input required type="number" id="investment"
                        value={userIput.initialInvestment}
                        onChange={(e) => handleChange("initialInvestment", e)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <Input required type="number" id="annual"
                        value={userIput.annualInvestment}
                        onChange={(e) => handleChange("annualInvestment", e)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <Input required type="number" id="expected-return"
                        value={userIput.expectedReturn}
                        subTitle = {<label>Expected Return Sub</label>}
                        onChange={(e) => handleChange("expectedReturn", e)}>
                        {<label>Expected Return</label>}
                    </Input>
                </p>
                <p>
                    <label>Duration</label>
                    <Input required type="number" id="duration"
                        value={userIput.duration}
                        onChange={(e) => handleChange("duration", e)}>
                    </Input>
                </p>
            </div>
        </section>
    </>


}