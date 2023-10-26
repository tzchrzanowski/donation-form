import React from 'react';
import dollarIcon from 'assets/icons/dollar-icon.svg';
import './CurrencyInput.css';

interface CurrencyInputProps {
    value: number,
    onChange: (value: number) => void,
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({value, onChange}) => {
    const [valueUpdated, setValueUpdated] = React.useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = parseFloat(inputValue);
        onChange(numericValue);
        setValueUpdated(true);
    }

    return <div className={"input-wrapper flex align-center mt-1.5"}>
        <img src={dollarIcon} alt={'$'} />
        <input
            className={`ml-2 input-amount-caption ${valueUpdated ? 'caption-updated': 'caption-initial' }`}
            role={"inputAmount"}
            type={"number"}
            value={value}
            onChange={handleChange}
        />
    </div>
};

export default CurrencyInput;
