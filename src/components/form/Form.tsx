import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import CurrencyInput from "../currency-input/CurrencyInput";
import './Form.css';
import FormHeader from "./form-header/FormHeader";
import {formatNumberWithTwoDecimalPlaces} from "utils/numberFormat";
import SummaryBlock from "./summary-block/SummaryBlock";
import {getCurrentDateMonth, dateMonthAndYear} from "../../utils/currentDateHelper";

const Form: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [selectedDate, setSelectedDate] = useState<dateMonthAndYear>(getCurrentDateMonth());
    const [donationAmount, setDonationAmount] = useState<number>(0);
    const [untilDateCaption, setUntilDateCaption] = useState<String>("");
    const formattedValue: string = formatNumberWithTwoDecimalPlaces(donationAmount);

    return (
        <div className={"form-container"}>
            <FormHeader />
            <div className={"mt-8 ml-10 mr-10 mb-8"}>
                <form className={"flex flex-col"}>
                    <div className={"flex flex-row"}>
                        <label>
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
                    <SummaryBlock amountCaption={formattedValue} dateCaption={selectedDate} />
                </form>
            </div>
        </div>
    );
}

export default Form;
