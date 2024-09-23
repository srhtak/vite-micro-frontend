// main-container/src/App.tsx
import React, { Suspense } from "react";
import "./utils/eventBus";
const Navbar = React.lazy(() => import("navbar/Navbar"));
// const Basket = React.lazy(() => import("basket/Basket"));
// const ProductDetail = React.lazy(() => import("productDetail/ProductDetail"));

const App: React.FC = () => {
  const onHandleBasketCount = () => {
    (window as any).eventBus.publish("basketCount", 3);
  };

  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </div>
      <button onClick={onHandleBasketCount}>Add basket</button>
      <div style={{ display: "flex" }}>
        {/* <ProductDetail />
        <Basket /> */}
      </div>
    </>
  );
};

export default App;
