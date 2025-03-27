import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout'; 
import ProductList from './components/ProductList'; 
import Cart from './pages/Cart'; 

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    const productExists = cart.find(item => item.id === product.id);

    if (productExists) {
      // Se o produto já existe, aumenta a quantidade
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    } else {
      // Se o produto não existe, adiciona ao carrinho com quantidade 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  // Função para remover do carrinho
  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  // Função para finalizar a compra
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Thank you for your purchase!");
      setCart([]); // Limpa o carrinho após a compra
      localStorage.removeItem('cart'); // Remove do localStorage
    }
  };

  // Contador de tipos de produtos no carrinho (somando a quantidade total)
  const getCartItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);  // Soma a quantidade de todos os produtos no carrinho
  };

  return (
    <Layout totalQuantity={getCartItemCount()}>
      <Routes>
        <Route path="/" element={<ProductList onAddToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleCheckout={handleCheckout} />} />
      </Routes>
    </Layout>
  );
}

export default App;
