import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./headerMobile.css"

const HeaderMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <header className="headerMobile">
        <img src="../../../../img/logoRace.png" className="logo__headerMobile" />
        <nav className="navBar__Mobile">
          <ul className={`menu__mobile ${isMenuOpen ? "show" : ""}`}>
            <li className="menuMobile__list-items">
              <Link to={"/"}>Inicio</Link>
            </li>
            <li className="menuMobile__list-items">
              <Link to={"/error"}>Eventos</Link>
            </li>
            <li className="menuMobile__list-items">
              <Link to={"/error"}>Revista</Link>
            </li>
            <li className="menuMobile__list-items">
              <Link to={"/galery"}>Galeria</Link>
            </li>
            <li className="menuMobile__list-items">
              <Link to={"/error"}>Nosotros</Link>
            </li>
          </ul>
          <button className="navBar__mobile-btn" onClick={handleMenuClick}>
            <img
              src="../../../../img/flechaAbajo.png"
              className={`menu__btn-img ${isMenuOpen ? "rotate" : ""}`}
            />
          </button>
        </nav>
      </header>
    );
  };
  
export default HeaderMobile