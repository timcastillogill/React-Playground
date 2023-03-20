import React from "react";
import "./App.css";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1 className="appName">React Playground</h1>
      </div>
      <Routing />
    </div>
  );
}

export default App;
