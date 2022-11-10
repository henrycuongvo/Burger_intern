import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  function handleUpNumber() {
    setNumber(number + 1);
  }
  function handleDownNumber() {
    setNumber(number - 1);
  }
  return (
    <>
      <button
        onClick={() => {
          handleUpNumber();
        }}
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={() => {
          handleDownNumber();
        }}
      >
        {" "}
        -{" "}
      </button>
      <div> {number}</div>
    </>
  );
}

export default App;
