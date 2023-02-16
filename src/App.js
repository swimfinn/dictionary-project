import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary defaultKeyword="tropics" />
      </header>
    </div>
  );
}

export default App;
