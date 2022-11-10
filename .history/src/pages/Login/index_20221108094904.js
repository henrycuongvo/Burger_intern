import { useState } from "react";
function Login() {
  const [number, setNumber] = useState(0);
  function handleUpNumber() {
    setNumber(number + 1);
  }
  return (
    <>
      <button onClick={() => {}}> + </button>
      <button> - </button>
    </>
  );
}

export default Login;
