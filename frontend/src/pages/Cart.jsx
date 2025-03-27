import React from "react";
import CartCard from "../components/CartCard";

const Cart = ({ cart, handleRemoveFromCart, handleCheckout }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartCard key={item.id} item={item} handleRemoveFromCart={handleRemoveFromCart} />
          ))}
          <div className="mt-4 text-lg font-bold">Total: ${total.toFixed(2)}</div>
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={handleCheckout}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default Cart;
