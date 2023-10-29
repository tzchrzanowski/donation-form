import React from 'react';
import { useTranslation } from 'react-i18next';
import dollarIcon from 'assets/icons/dollar-icon.svg';
import './CurrencyInput.css';

interface CurrencyInputProps {
    value: number,
    onChange: (value: number) => void,
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({value, onChange}) => {
    const { t } = useTranslation('translation', { keyPrefix: 'buttons-caption'});
    const [valueUpdated, setValueUpdated] = React.useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = parseFloat(inputValue);
        onChange(numericValue);
        setValueUpdated(true);
    }

    return <div className={"flex flex-col mr-6 w-full items-start"}>
        <span className={"input-caption"}>{t('can-donate')}</span>
        <div className={"input-wrapper flex align-center mt-1.5"}>
            <img src={dollarIcon} alt={'$'} />
            <input
                className={`ml-2 input-amount-caption ${valueUpdated ? 'caption-updated': 'caption-initial' }`}
                role={"inputAmount"}
                type={"number"}
                value={value}
                onChange={handleChange}
            />
        </div>
    </div>
};

export default CurrencyInput;
