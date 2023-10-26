import React, {useState} from 'react';
import CurrencyInput from "../currency-input/CurrencyInput";
import './Form.css';
import FormHeader from "./form-header/FormHeader";

const Form: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [donationAmount, setDonationAmount] = useState<number>(0);

    return (
        <div className={"form-container"}>
            <FormHeader />
            <form>
                <label>
                    <span>I can donate:</span>
                    <CurrencyInput value={donationAmount} onChange={setDonationAmount}/>
                </label>
            </form>
        </div>
    );
}

export default Form;
