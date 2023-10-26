import React from 'react';
import './App.css';
import logoIcon from 'assets/logo-icon.svg';
import logoCaption from 'assets/logo-caption.svg';

function App() {
  return (
    <div className={"App"}>
      <div className={"App-header"}>
          <img src={logoIcon} alt={"logo"} />
          <img src={logoCaption} alt={"natur.ally"} />
        App
      </div>
    </div>
  );
}

export default App;
