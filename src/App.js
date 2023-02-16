import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1>Dictionary</h1>
        </header>
        <Dictionary defaultKeyword="tropics" />
      </div>
      <br />
      <footer>
        Coded by Eileen Finn and is open-sourced on <a href="https://github.com/swimfinn/dictionary-project.git">Github</a>
      </footer>
    </div>
  );
}

export default App;
