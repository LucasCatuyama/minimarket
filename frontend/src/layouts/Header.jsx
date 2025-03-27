import React from "react";
import { Link } from "react-router-dom";
import mercadinhoLogoVerde from "../assets/mercadinho-logo-verde.png"; // Logo do Mercadinho
import cartIcon from "../assets/cart.png"; // Ícone do carrinho

const Header = ({ totalQuantity }) => {
  return (
    <div className="flex flex-row justify-between items-center gap-6 px-4 py-6 sm:px-20 sm:py-12">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          src={mercadinhoLogoVerde}
          alt="Green logo of Mercadinho"
          className="w-32 sm:w-40" // Logo será menor em telas pequenas
        />
      </Link>

      {/* Campo de pesquisa */}
      <form role="search" className="hidden sm:block">
        <input
          id="search"
          type="search"
          name="search"
          placeholder="Search..."
          aria-label="Search through site content"
          className="w-[250px] sm:w-[700px] h-[42px] p-3 bg-gray-200 border-2 rounded-[20px] border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
        />
      </form>

      <div className="flex flex-row gap-6 items-center">
        {/* Exibindo o contador de itens do carrinho */}
        <div className="relative">
          <Link to="/cart">
            <img src={cartIcon} alt="Cart Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
          {/* Condicionalmente exibe o número de itens no carrinho */}
          {totalQuantity > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </div>

        {/* Ícone de usuário */}
        <Link to="/login">
          <img src="../assets/user.png" alt="User Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
