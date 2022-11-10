import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  function handleUpNumber() {
    setNumber(number + 1);
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
      <button> - </button>
      <div> {number}</div>
    </>
  );
}

export default App;
