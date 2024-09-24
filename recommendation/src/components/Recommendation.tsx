import React, { useState, useEffect } from "react";

interface RecommendedProduct {
  id: string;
  name: string;
}

const Recommendation: React.FC = () => {
  const [recommendations, setRecommendations] = useState<RecommendedProduct[]>([
    { id: "1", name: "medium size complementary product" },
    { id: "2", name: "medium size accessory" },
    { id: "3", name: "medium size related product" },
  ]);

  useEffect(() => {
    const handleVariantChange = (event: Event) => {
      const variant = (event as CustomEvent).detail;

      const newRecommendations = [
        { id: "1", name: `${variant} size complementary product` },
        { id: "2", name: `${variant} size accessory` },
        { id: "3", name: `${variant} size related product` },
      ];
      setRecommendations(newRecommendations);
    };

    window.addEventListener("VARIANT_CHANGED", handleVariantChange);

    return () => {
      window.removeEventListener("VARIANT_CHANGED", handleVariantChange);
    };
  }, []);

  const recommendationStyle: React.CSSProperties = {
    padding: "20px",
    border: "3px dashed orange",
    margin: "10px",
    flex: 1,
  };

  return (
    <div style={recommendationStyle}>
      <h3>Recommendations</h3>
      <ul>
        {recommendations.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
