import React, { useState, useEffect } from 'react';
import Input from './Input';
export default function UserInput({userInput,onUserInput  }) {

    return <>
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <Input required type="number" id="investment"
                        value={userInput.initialInvestment}
                        onChange={(e) => onUserInput("initialInvestment", e)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <Input required type="number" id="annual"
                        value={userInput.annualInvestment}
                        onChange={(e) => onUserInput("annualInvestment", e)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <Input required type="number" id="expected-return"
                        value={userInput.expectedReturn}
                        subtitle = {<label>Expected Return Sub</label>}
                        onChange={(e) => onUserInput("expectedReturn", e)}>
                        {<label>Expected Return</label>}
                    </Input>
                </p>
                <p>
                    <label>Duration</label>
                    <Input required type="number" id="duration"
                        value={userInput.duration}
                        onChange={(e) => onUserInput("duration", e)}>
                    </Input>
                </p>
            </div>
        </section>
    </>


}