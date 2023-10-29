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
    const [formattedInputValue, setFormattedInputValue] = React.useState<String>("0.00");
    const [isEditing, setIsEditing] = React.useState<boolean>(false);

    React.useEffect(()=> {
        if(value !== null) {
            setFormattedInputValue(value.toLocaleString('en-US'));
        }else {
            setFormattedInputValue('');
        }
    }, [value]);

    const handleBlur = () => {
        setIsEditing(false);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        let numericValue = parseFloat(inputValue);
        if (numericValue < 0) {
            numericValue = 0;
        }
        onChange(numericValue);
        setValueUpdated(true);
    }

    return <div className={"flex flex-col amount-input-container items-start"}>
        <span className={"input-caption"}>{t('can-donate')}</span>
        <div
            onClick={()=> setIsEditing(true)}
            className={"input-border input-wrapper flex align-center mt-1.5"}
        >
            <img src={dollarIcon} alt={'$'} />
            {
                isEditing ? (
                        <input
                            className={`ml-2 input-outline input-amount-caption w-full ${valueUpdated ? 'caption-updated': 'caption-initial' }`}
                            role={"inputAmount"}
                            type={"number"}
                            placeholder={"0.00"}
                            value={value !== 0 ? value: ""}
                            step={"1"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                ) : (
                    <div onClick={()=> setIsEditing(true)}>
                        <span
                            className={`ml-2 input-amount-caption w-full ${valueUpdated ? 'caption-updated': 'caption-initial' }`}
                        >
                            {valueUpdated ? formattedInputValue : "0.00"}
                        </span>
                    </div>
                )
            }
        </div>
    </div>
};

export default CurrencyInput;
