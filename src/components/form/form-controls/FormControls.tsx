import React from 'react';
import { useTranslation } from 'react-i18next';
import './FormControls.css';

interface FormControlsProps {
    handleCancel: () => void;
    windowWidth: number;
}

const FormControls: React.FC<FormControlsProps> = ({handleCancel, windowWidth}) => {
    const { t } = useTranslation('translation', { keyPrefix: 'buttons-caption'});

    return (<div className={"mt-8 form-control-section flex flex-row justify-items-stretch items-stretch"} data-testid={"form-controls"}>
        {windowWidth > 768 && <button
                data-testid={"cancel-button"}
                className={"btn m-2 px-6 py-4 none button-caption light-button-caption light-button-border light-btn-bg"}
                type={"button"}
                onClick={handleCancel}
            >
                {t("cancel")}
            </button>
        }
        <button
            data-testid={"submit-button"}
            className={"btn m-2 px-6 py-4 none button-caption dark-button-caption dark-button-border dark-btn-bg"}
            type={"submit"}
        >
            {t("continue")}
        </button>
    </div>);
}

export default FormControls;
