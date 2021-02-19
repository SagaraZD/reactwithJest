import React from "react";
import "./App.css";
import FetchData from "./FetchData";

function App() {
  const [counter, setcounter] = React.useState(0);
  return (
    <div className="App">
      <h1>This is my React App</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => setcounter(counter - 1)}>
        Decrement
      </button>
      <br />
      <br />
      <br />
      <FetchData />
    </div>
  );
}

export default App;
