import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [showNum, setShowNum] = useState(0);
  useEffect(() => {
    setShowNum(number + 2);
  });

  //handle Button
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
      <h2> This is number: {showNum}</h2>
    </>
  );
}

export default App;
