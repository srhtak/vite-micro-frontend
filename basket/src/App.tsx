import { useState } from "react";
import "./App.css";
import Basket from "./Basket";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Basket />
    </>
  );
}

export default App;
