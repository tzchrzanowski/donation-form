import React from 'react';

interface CurrencyInputProps {
    value: number,
    onChange: (value: number) => void,
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({value, onChange}) => {
    const formattedValue = value;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = parseFloat(inputValue);
        onChange(numericValue);
    }

    return <input
        role={"inputAmount"}
        type={"number"}
        value={formattedValue}
        onChange={handleChange}
    />
};

export default CurrencyInput;
