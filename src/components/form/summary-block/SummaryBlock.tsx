import React from 'react';
import './SummaryBlock.css';

interface summaryBlockProps {
    amountCaption: string,
    dateCaption: string,
}
const SummaryBlock: React.FC<summaryBlockProps> = ({amountCaption, dateCaption}) => {
    return (<div className={"description-caption px-4 py-5 mt-6"}>
        <span className={"description-caption"}>You will be sending </span>
        <span className={"value-caption"}>$ {amountCaption}</span>
        <span className={"description-caption"}> every month, until</span>
        <span className={"value-caption"}> {dateCaption}</span>
        <span className={"description-caption"}>. Thank you!</span>
    </div>)
}

export default SummaryBlock;
