/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  variant: "small" | "medium" | "large";
}

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    id: "1",
    name: "Sample Product",
    price: 9.99,
    variant: "medium",
  });

  const changeVariant = (newVariant: "small" | "medium" | "large") => {
    setProduct((prev) => ({ ...prev, variant: newVariant }));
    const event = new CustomEvent("VARIANT_CHANGED", { detail: newVariant });
    window.dispatchEvent(event);
  };

  const handleAddToBasket = () => {
    const event = new CustomEvent("ADD_TO_BASKET", {
      detail: product,
    });
    window.dispatchEvent(event);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "3px dashed green",
        margin: "10px",
        flex: 1,
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Current Variant: {product.variant}</p>
      <div
        style={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <button onClick={() => changeVariant("small")}>Small</button>
        <button onClick={() => changeVariant("medium")}>Medium</button>
        <button onClick={() => changeVariant("large")}>Large</button>
      </div>
      <div>
        <button onClick={handleAddToBasket}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
