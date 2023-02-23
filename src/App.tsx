import React from "react";
import "./App.css";
import CatFact from "./components/CatFact/CatFact";
import DogImage from "./components/DogImage/DogImage";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="appName">Cat Fact App</h1>
      </header>
      <Routing />
    </div>
  );
}

export default App;
