import React from 'react';
import './App.css';
import logoIcon from 'assets/logo-icon.svg';
import logoCaption from 'assets/logo-caption.svg';

function App() {
  return (
    <div className={"App"}>
      <div className={"App-header flex flex-row items-center justify-start"}>
          <div className={"ml-10 my-6 flex flex-row"}>
              <img className={"mr-2"} src={logoIcon} alt={"logo"} />
              <div className={"flex items-end"}>
                  <img src={logoCaption} alt={"natur.ally"} />
              </div>
          </div>
      </div>
      <div className={""}>
        App
      </div>
    </div>
  );
}

export default App;
