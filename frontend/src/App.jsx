import React, { useState } from "react";
import Popup from "./frontend/src/components/Popup";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>ByteBuddy</h1>
      <Popup />
    </div>
  );
};

export default App;
