import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [basketCount, setBasketCount] = useState<number>(0);

  useEffect(() => {
    // Subscribe to 'clearSearch' event
    (window as any).eventBus.subscribe("basketCount", (data: number) => {
      setBasketCount(data);
    });
  }, []);

  return (
    <div
      style={{
        color: "white",
        lineHeight: 10,
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "blue",
        padding: 10,
      }}
    >
      NAVBAR
      <div>Basket Count {basketCount}</div>
    </div>
  );
};

export default Navbar;
