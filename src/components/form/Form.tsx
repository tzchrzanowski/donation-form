import React, {useState} from 'react';
import CurrencyInput from "../currency-input/CurrencyInput";
import './Form.css';
import FormHeader from "./form-header/FormHeader";
import SummaryBlock from "./summary-block/SummaryBlock";
import {getCurrentDateMonth, dateMonthAndYear} from "utils/currentDateHelper";
import {formatNumberWithTwoDecimalPlaces} from "utils/numberFormat";
import FormControls from "./form-controls/FormControls";
import {useTranslation} from "react-i18next";

const Form: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<dateMonthAndYear>(getCurrentDateMonth());
    const [donationAmount, setDonationAmount] = useState<number>(0);
    const formattedValue: string = formatNumberWithTwoDecimalPlaces(donationAmount);
    const { t } = useTranslation('translation', { keyPrefix: 'buttons-caption'});

    /*
    * on form cancel action:
    * */
    const handleCancel = () => {
        // TODO: no logic as per requirements.
    }

    /*
    * on form submit action:
    * */
    const handleSubmit = () => {
        // TODO: no logic as per requirements.
    }

    return (
        <div className={"form-container"}>
            <FormHeader />
            <div className={"mt-8 ml-10 mr-10 mb-8"}>
                <form
                    className={"flex flex-col"}
                    onSubmit={()=>handleSubmit()}
                    data-testid={"form-id"}
                >
                    <div className={"flex flex-row"}>
                        <label>
                            <CurrencyInput value={donationAmount} onChange={setDonationAmount}/>
                        </label>
                        <label className={"flex flex-col ml-6 w-full items-start"}>
                            <span className={"input-caption"}>Every month until</span>
                            <input />
                        </label>
                    </div>
                    <SummaryBlock amountCaption={formattedValue} dateCaption={selectedDate} />
                    <FormControls handleCancel={handleCancel} handleSubmit={handleSubmit} />
                </form>
            </div>
        </div>
    );
}

export default Form;
