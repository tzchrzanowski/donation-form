import React from 'react';
import {dateMonthAndYear} from "utils/currentDateHelper";
import { useTranslation } from 'react-i18next';
import "./MonthYearSelector.css";
import leftArrow from "assets/icons/left-arrow-icon.svg";
import rightArrow from "assets/icons/right-arrow-icon.svg";

interface MonthYearSelectorProps {
    currentFormattedDateObject: dateMonthAndYear,
    changeMonthCallback: (date: dateMonthAndYear)=> void,
}

export const MonthYearSelector: React.FC<MonthYearSelectorProps> = ({currentFormattedDateObject, changeMonthCallback}) => {
    const { t } = useTranslation('translation', { keyPrefix: 'buttons-caption'});
    /*
    * Reduce amount of months by one
    * */
    const decreaseMonth = () => {
        console.log("reducing month..");
    }

    /*
    * Increase amount of months by one
    * */
    const increaseMonth = () => {
        console.log("increasing month...");
    }

    return (<div className={"flex flex-col month-selector-container items-start"}>
        <span className={"input-caption"}>{t("every-month-until")}</span>
        <div className={"month-selector-wrapper flex place-content-between mt-1.5"}>
            <div className={"flex"} onClick={decreaseMonth}>
                <div className={"icon-wrapper"}>
                    <img className={"arrow-button"} src={leftArrow} alt={"<"} />
                </div>
            </div>
            <div className={"flex flex-col mx-4"}>
                <span className={"month-caption"}>{currentFormattedDateObject.month}</span>
                <span className={"year-caption"}>{currentFormattedDateObject.year}</span>
            </div>
            <div className={"flex"} onClick={increaseMonth}>
                <div className={"icon-wrapper"}>
                    <img className={"arrow-button"} src={rightArrow} alt={">"} />
                </div>
            </div>
        </div>
    </div>);
}

export default MonthYearSelector;
