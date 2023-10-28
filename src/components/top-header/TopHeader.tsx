import './TopHeader.css';
import React from "react";
import logoIcon from 'assets/icons/logo-icon.svg';
import logoCaption from 'assets/icons/logo-caption.svg';

export function TopHeader() {
    return(
        <div className={"App-header flex flex-row items-center justify-start"} data-testid={"app-id"}>
            <div className={"ml-10 my-6 flex flex-row"}>
                <img className={"mr-2"} src={logoIcon} alt={"logo"} />
                <div className={"flex items-end"}>
                    <img src={logoCaption} alt={"natur.ally"} />
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
