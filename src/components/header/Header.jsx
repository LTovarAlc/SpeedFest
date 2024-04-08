import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.1; // 10% de la altura de la pagina

      if (scrollPosition >= scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Restaurar el desplazamiento de la página al principio después de cambiar de ruta
  useEffect(() => {
    window.scrollTo(0, 0); // Llevar la página al principio
  }, [location]);
  
  return (
    <header className={`header ${isVisible ? "visible" : ""}`}>
      <Link to={"/"}>
        <img
          src="../../../img/logoRace.png"
          alt="Logo"
          className="logoHeader"
        />
      </Link>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-items">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className="menu__list-items">
            <Link to={"/error"}>Eventos</Link>
          </li>
          <li className="menu__list-items">
            <Link to={"/error"}>Revista</Link>
          </li>
          <li className="menu__list-items">
            <Link to={"/galery"}>Galeria</Link>
          </li>
          <li className="menu__list-items">
            <Link to={"/error"}>Nosotros</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;