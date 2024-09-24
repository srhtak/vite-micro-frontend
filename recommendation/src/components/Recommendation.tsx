import React, { useState, useEffect } from "react";

interface RecommendedProduct {
  id: string;
  name: string;
}

const Recommendation: React.FC = () => {
  const [recommendations, setRecommendations] = useState<RecommendedProduct[]>(
    []
  );

  useEffect(() => {
    const handleVariantChange = (variant: string) => {
      // In a real scenario, you might fetch recommendations from an API
      const newRecommendations = [
        { id: "1", name: `${variant} size complementary product` },
        { id: "2", name: `${variant} size accessory` },
        { id: "3", name: `${variant} size related product` },
      ];
      setRecommendations(newRecommendations);
    };

    const subscribe = (window as any).eventBus.subscribe(
      "VARIANT_CHANGED",
      handleVariantChange
    );

    return () => {
      subscribe();
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
