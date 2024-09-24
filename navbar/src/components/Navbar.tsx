import React, { useEffect, useState } from "react";

interface Product {
  name: string;
  price: number;
}

const Navbar: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const handleAddToBasket = (data: Product) => {
      setProduct((prevElements) => [...prevElements, data]);
    };

    // Subscribe to add to basket event only once
    const subscribe = (window as any).eventBus.subscribe(
      "ADD_TO_BASKET",
      (data: Product) => {
        handleAddToBasket(data);
      }
    );

    return () => {
      subscribe();
    };
  }, []);

  return (
    <div
      style={{
        color: "black",
        lineHeight: 10,
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        border: "2px dashed red",
        margin: 10,
        padding: 10,
      }}
    >
      NAVBAR - Triggered by Product Detail
      <div>Basket Count {product?.length}</div>
    </div>
  );
};

export default Navbar;
