import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-green-800 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white text-sm sm:text-base">
          Developed by{" "}
          <a
            className="text-orange-400 hover:underline"
            href="https://github.com/LucasCatuyama"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Catuyama
          </a>{" "}
          for the Front-End Development course
        </p>
      </div>
    </div>
  );
};

export default Footer;
