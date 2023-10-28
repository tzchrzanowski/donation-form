import React from 'react';
import { useTranslation } from 'react-i18next';
import './SummaryBlock.css';
import {dateMonthAndYear} from "utils/currentDateHelper";

interface summaryBlockProps {
    amountCaption: string,
    dateCaption: dateMonthAndYear,
}

const SummaryBlock: React.FC<summaryBlockProps> = ({amountCaption, dateCaption}) => {
    const { t } = useTranslation('translation', { keyPrefix: 'form-summary'});

    return (<div data-testid={"form-summary"}>
        <div className={"flex flex-row justify-between items-center mt-8 mx-4" }>
            <span className={"pl-4 mr-2 summary-caption"}>Total amount</span>
            <span className={"summary-amount"}>${amountCaption}</span>
        </div>
        <div className={"description-caption px-4 py-5 mt-6"}>
            <span className={"description-caption"}>{t("you-will-send")}</span>
            <span className={"value-caption"}>$ {amountCaption}</span>
            <span className={"description-caption"}>{t('every-month')}</span>
            <span className={"value-caption"}>{dateCaption.month} {dateCaption.year}</span>
            <span className={"description-caption"}>{t('thank-you')}</span>
        </div>
    </div>)
}

export default SummaryBlock;
