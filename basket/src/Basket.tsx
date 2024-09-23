import React, { useState } from "react";

interface BasketItem {
  name: string;
  price: number;
}

const Basket: React.FC = () => {
  const [items, setItems] = useState<BasketItem[]>([]);

  // In a real app, you'd fetch this data from an API or state management solution
  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
