import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="languages">
        <button className="btn">ES</button>
        <button className="btn">EN</button>
        <button className="btn">FR</button>
      </div>
      <div className="logo">
        <img src="/assets/image.png" alt="Logo de Aromas de Viña" />
      </div>
      <div className="header-right">
        <div className="search">
          <svg className="icono" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </svg>
          <input placeholder="Buscar" type="search" className="inputSearch" />
        </div>
        <div className="cart">
          <svg className="icono" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M7 4V2h10v2h2v2H5V6h2zm4 14c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-2h-4l-1-8H7l-1 8H2V6h2l1-4h14l1 4h2v10z"></path>
          </svg>
        </div>
        <a href="/login" className="login">
          <svg className="icono" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;