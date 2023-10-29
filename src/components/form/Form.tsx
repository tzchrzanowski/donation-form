import React, {useState} from 'react';
import CurrencyInput from "../currency-input/CurrencyInput";
import './Form.css';
import FormHeader from "./form-header/FormHeader";
import SummaryBlock from "./summary-block/SummaryBlock";
import {getCurrentDateMonth, dateMonthAndYear} from "utils/currentDateHelper";
import {formatNumberWithTwoDecimalPlaces} from "utils/numberFormat";
import FormControls from "./form-controls/FormControls";
import {useTranslation} from "react-i18next";
import MonthYearSelector from "../month-year-selector/MonthYearSelector";

interface FormProps {
    windowWidth: number;
}

const Form: React.FC<FormProps> = ({windowWidth}) => {
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
            <FormHeader windowWidth={windowWidth} handleCancelCallback={handleCancel} />
            <div className={"mt-8 ml-10 mr-10 mb-8"}>
                <form
                    className={"flex flex-col"}
                    onSubmit={()=>handleSubmit()}
                    data-testid={"form-id"}
                >
                    <div className={"flex input-container"}>
                        <label className={"label"}>
                            <CurrencyInput value={donationAmount} onChange={setDonationAmount}/>
                        </label>
                        <label className={"label label-month-selector"}>
                            <MonthYearSelector currentFormattedDateObject={selectedDate} changeMonthCallback={setSelectedDate} />
                        </label>
                    </div>
                    <SummaryBlock amountCaption={formattedValue} dateCaption={selectedDate} />
                    <FormControls handleCancel={handleCancel} windowWidth={windowWidth} />
                </form>
            </div>
        </div>
    );
}

export default Form;
