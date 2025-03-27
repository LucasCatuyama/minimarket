import React from "react";
import Header from "../layouts/Header"; // Certifique-se de que o caminho está correto
import Footer from "../layouts/Footer"; // Certifique-se de que o caminho está correto

const Layout = ({ children, totalQuantity }) => {
  return (
    <div className="bg-beige-100 min-h-screen">
      <Header totalQuantity={totalQuantity} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
