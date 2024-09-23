import { useState } from "react";
import "./App.css";
import ProductDetail from "./ProductDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductDetail />
    </>
  );
}

export default App;
