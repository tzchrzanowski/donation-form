import React from 'react';
import { useTranslation } from 'react-i18next';
import givingIcon from "assets/icons/giving-icon.svg";
import './FormHeader.css';

const FormHeader: React.FC = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'form-header'});

    return (
        <div className={"form-header"} data-testid={"form-header"}>
            <div className={"form-header-content-wrapper flex flex-row"}>
                <img src={givingIcon} alt={"giving-icon"} />
                <div className={"flex flex-col items-start justify-center ml-5"}>
                    <span className={"header-main-caption mb-0.5"}>{t('giving-block')}</span>
                    <span className={"header-sub-caption mt-0.5"}>{t('setup-donation')}</span>
                </div>
            </div>
        </div>
    );
}

export default FormHeader;
