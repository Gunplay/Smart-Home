import React from 'react';

interface CartProps {
  cartItems: { id: number; name: string; price: number; quantity: number }[];
  removeFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="border rounded-lg p-4 shadow-md m-2">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2">
              <div className="flex justify-between items-center">
                <span>
                  {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                </span>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="text-xl font-bold mt-4">Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
