import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 49.99 },
  { id: 3, name: 'Product 3', price: 19.99 },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const AppCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as CartItem[])
    );
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Shopping Cart</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>Products</h2>
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default AppCart;
