import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const price = Number(product.price);

  return (
    <div className="flex flex-col items-start gap-3 h-auto p-4 bg-gray-200 border-2 rounded-2xl border-green-600 text-green-600 hover:shadow-md transition">
      <img src={product.image_url} alt={product.name} className="w-full h-48 object-contain mb-3" />
      <h1 className="text-xl font-bold leading-7">{product.name}</h1>
      <p className="text-lg font-semibold">${price.toFixed(2)}</p>
      <p className="text-sm text-gray-600 flex-grow">{product.description}</p>
      <button 
        onClick={() => onAddToCart(product)} 
        className="w-full px-3 py-4 bg-green-600 rounded-lg text-center text-base font-bold text-white mt-auto hover:bg-green-700 focus:outline-none transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
