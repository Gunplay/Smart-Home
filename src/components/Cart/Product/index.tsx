import React from 'react';

interface ProductProps {
  product: { id: number; name: string; price: number };
  addToCart: (product: { id: number; name: string; price: number }) => void;
}

const Product: React.FC<ProductProps> = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md m-2">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">Price: ${product.price.toFixed(2)}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
