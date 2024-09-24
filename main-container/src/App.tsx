import React, { Suspense } from "react";
import "./utils/eventBus";
const Navbar = React.lazy(() => import("navbar/Navbar"));
const Recommendation = React.lazy(
  () => import("recommendation/Recommendation")
);
const ProductDetail = React.lazy(() => import("productDetail/ProductDetail"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ border: "2px dashed blue" }}>
        <div style={{ display: "flex", width: "100%" }}>
          <Navbar />
        </div>
        <div style={{ display: "flex" }}>
          <ProductDetail />
          <Recommendation />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
