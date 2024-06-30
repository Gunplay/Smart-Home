import React from 'react';

interface ProductProps {
  product: { id: number; name: string; price: number };
  addToCart: (product: { id: number; name: string; price: number }) => void;
}

const Product: React.FC<ProductProps> = ({ product, addToCart }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
