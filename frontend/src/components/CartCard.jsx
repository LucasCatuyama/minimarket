import React from "react";

const CartCard = ({ item, handleRemoveFromCart }) => {
  const price = Number(item.price);
  const quantity = Number(item.quantity);

  return (
    <div className="flex flex-row justify-between py-4 border-b border-green-600">
      <img src={item.image_url} alt={item.name} className="w-32 h-32 object-contain" />
      <div className="flex flex-col gap-4 max-w-[250px]">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm">{item.description}</p>
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm font-semibold">Qty: {quantity}</p>
          <p className="text-sm">${price.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={() => handleRemoveFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;
