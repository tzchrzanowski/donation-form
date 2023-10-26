import React from 'react';
import givingIcon from "assets/icons/giving-icon.svg";
import './FormHeader.css';

const FormHeader: React.FC = () => {
    return (
        <div className={"form-header"}>
            <div className={"form-header-content-wrapper flex flex-row"}>
                <img src={givingIcon} alt={"giving-icon"} />
                <div className={"flex flex-col items-start justify-center ml-5"}>
                    <span className={"header-main-caption mb-0.5"}>The giving block</span>
                    <span className={"header-sub-caption mt-0.5"}>Set up your donation goal!</span>
                </div>
            </div>
        </div>
    );
}

export default FormHeader;
