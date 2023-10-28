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

    return (<div className={"description-caption px-4 py-5 mt-6"}>
        <span className={"description-caption"}>{t("you-will-send")}</span>
        <span className={"value-caption"}>$ {amountCaption}</span>
        <span className={"description-caption"}>{t('every-month')}</span>
        <span className={"value-caption"}>{dateCaption.month} {dateCaption.year}</span>
        <span className={"description-caption"}>{t('thank-you')}</span>
    </div>)
}

export default SummaryBlock;
