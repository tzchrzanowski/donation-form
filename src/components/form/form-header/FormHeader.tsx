import React from 'react';
import { useTranslation } from 'react-i18next';
import givingIcon from "assets/icons/giving-icon.svg";
import './FormHeader.css';
import xIcon from 'assets/icons/x-icon.svg';

interface FormHeaderProps {
    windowWidth: number,
    handleCancelCallback: ()=> void,
}

const FormHeader: React.FC<FormHeaderProps> = ({windowWidth, handleCancelCallback}) => {
    const { t } = useTranslation('translation', { keyPrefix: 'form-header'});

    return (
        <div className={"form-header"} data-testid={"form-header"}>
            {
                windowWidth < 768 &&
                <div
                    className={"px-2 py-2 x-button z-10 absolute top-0 right-0 mt-2 mr-3"}
                    data-testid={"cancel-x-button"}
                    onClick={handleCancelCallback}
                >
                    <img className={""} src={xIcon} alt={"X"} />
                </div>
            }
            <div className={"form-header-content-wrapper flex"}>
                <img src={givingIcon} alt={"giving-icon"} data-testid={"giving-icon-id"} />
                <div className={"flex flex-col justify-center header-caption ml-5"}>
                    <span className={"header-main-caption mb-0.5"} data-testid={"form-header-main-caption-id"}>{t('giving-block')}</span>
                    <span className={"header-sub-caption mt-0.5"} data-testid={"form-header-sub-caption-id"}>{t('setup-donation')}</span>
                </div>
            </div>
        </div>
    );
}

export default FormHeader;
