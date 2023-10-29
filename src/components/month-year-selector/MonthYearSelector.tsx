import React from 'react';
import {dateMonthAndYear, getCurrentDateMonth, getNextMonth, getPreviousMonth} from "utils/dateHelpers"
import { useTranslation } from 'react-i18next';
import "./MonthYearSelector.css";
import leftArrow from "assets/icons/left-arrow-icon.svg";
import rightArrow from "assets/icons/right-arrow-icon.svg";

interface MonthYearSelectorProps {
    currentFormattedDateObject: dateMonthAndYear,
    changeMonthCallback: (date: dateMonthAndYear)=> void,
}

export const MonthYearSelector: React.FC<MonthYearSelectorProps> = ({
    currentFormattedDateObject,
    changeMonthCallback,
}) => {
    const { t } = useTranslation('translation', { keyPrefix: 'buttons-caption'});
    const currentDate = getCurrentDateMonth();

    /*
    * Reduce amount of months by one
    * */
    const decreaseMonth = () => {
        const previousMonth = getPreviousMonth(currentFormattedDateObject);
        changeMonthCallback(previousMonth);
    }

    /*
    * Increase amount of months by one
    * */
    const increaseMonth = () => {
        const newMonth = getNextMonth(currentFormattedDateObject);
        changeMonthCallback(newMonth);
    }

    /*
    * Checks if user tries to select month that is in the past
    * */
    const isPastMonth = (year: number, month: number) => {
        if (year < currentDate.year) return true;
        if (year === currentDate.year && month < currentDate.monthNumber) return true;
        return false;
    };

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
