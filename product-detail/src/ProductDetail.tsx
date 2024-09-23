import React from "react";

interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  // In a real app, you'd fetch product details based on the productId
  return (
    <div>
      <h2>Product {productId}</h2>
      <p>This is the product detail page for product {productId}.</p>
      <button>Add to Basket</button>
    </div>
  );
};

export default ProductDetail;
