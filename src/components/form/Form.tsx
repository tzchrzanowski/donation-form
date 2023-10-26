import React, {useState} from 'react';
import CurrencyInput from "../currency-input/CurrencyInput";
import './Form.css';
import FormHeader from "./form-header/FormHeader";
import {formatNumberWithTwoDecimalPlaces} from "utils/numberFormat";
import SummaryBlock from "./summary-block/SummaryBlock";

const Form: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [donationAmount, setDonationAmount] = useState<number>(0);
    const [untilDateCaption, setUntilDateCaption] = useState<String>("");

    const formattedValue: string = formatNumberWithTwoDecimalPlaces(donationAmount);
    const dateCaption: string = "August 2024";

    return (
        <div className={"form-container"}>
            <FormHeader />
            <div className={"mt-8 ml-10 mr-10 mb-8"}>
                <form className={"flex flex-col"}>
                    <div className={"flex flex-row"}>
                        <label className={"flex flex-col mr-6 w-full items-start"}>
                            <span className={"input-caption"}>I can donate</span>
                            <CurrencyInput value={donationAmount} onChange={setDonationAmount}/>
                        </label>
                        <label className={"flex flex-col ml-6 w-full items-start"}>
                            <span className={"input-caption"}>Every month until</span>
                            <input />
                        </label>
                    </div>
                    <div className={"flex flex-row justify-between items-center mt-8 mx-4" }>
                        <span className={"pl-4 mr-2 summary-caption"}>Total amount</span>
                        <span className={"summary-amount"}>${formattedValue}</span>
                    </div>
                    <SummaryBlock amountCaption={formattedValue} dateCaption={dateCaption} />
                </form>
            </div>

        </div>
    );
}

export default Form;
