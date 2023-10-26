import React from 'react';
import './App.css';
import TopHeader from "../top-header/TopHeader";
import Form from "../form/Form";

function App() {
  return (
    <div className={"App flex justify-center flex-column"}>
      <TopHeader />
      <div className={"page-content-container flex justify-center mt-16"}>
          <Form />
      </div>
    </div>
  );
}

export default App;
