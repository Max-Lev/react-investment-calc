import React from 'react';
import Input from './Input';
export default function UserInput({ onCalculate, amountValue, setAmountValue, ...props }) {
    // const [userInput, setUserInput] = React.useState("");

    // const handleChange = (event) => {
    //     setUserInput(event.target.value);
    // }

    const onChangeAmount = (event) => {
        const { value } = event.target;
        return setAmountValue(value);

    }
    // This function is called when the sum input field is changed
    const onChangeSum = (event) => {
        // Log the value of the input field to the console
        console.log(event.target.value);
    }

    return <>
        <div id="user-input">
            <div className="input-group">
                <Input type="number" label="amount" value={amountValue} onChange={onChangeAmount} />
                <Input label="sum" value="20000" onChange={onChangeSum} />
            </div>
            <div className="input-group">
                <Input>
                    {<label>Calc</label>}
                </Input>
                <Input></Input>
            </div>
    </div >
    </>


}