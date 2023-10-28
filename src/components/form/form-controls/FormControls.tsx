import React from 'react';
import { useTranslation } from 'react-i18next';

interface FormControlsProps {
    handleCancel: () => void;
    handleSubmit: () => void;
}

const FormControls: React.FC<FormControlsProps> = ({handleCancel, handleSubmit}) => {
    const { t } = useTranslation('translation', { keyPrefix: 'buttons-caption'});

    return (<div className={"form-control-section flex"} data-testid={"form-controls"}>
            <button
                data-testid={"cancel-button"}
                type={"button"}
                onClick={handleCancel}
            >
                {t("cancel")}
            </button>
            <button
                data-testid={"submit-button"}
                className={"px-6 py-4 none"}
                type={"submit"}
            >
                {t("continue")}
            </button>
        </div>
    );
}

export default FormControls;
