import React, { useEffect, useState } from "react";

interface Product {
  name: string;
  price: number;
}

const Navbar: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const handleAddToBasket = (event: Event) => {
      const newProduct = (event as CustomEvent).detail;
      setProduct((prev) => [...prev, newProduct]);
    };

    window.addEventListener("ADD_TO_BASKET", handleAddToBasket);

    return () => {
      window.removeEventListener("ADD_TO_BASKET", handleAddToBasket);
    };
  }, []);

  return (
    <div
      style={{
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        border: "2px dashed aqua",
        margin: 10,
        padding: 10,
      }}
    >
      <h1 style={{ fontWeight: "bold", display: "block" }}>NAVBAR</h1>
      <div>Basket Count {product?.length}</div>
    </div>
  );
};

export default Navbar;
