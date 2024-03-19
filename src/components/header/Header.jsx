import "./Header.css"
import React, {useState, useEffect} from "react"

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect (() => {
        const handleScroll = () =>{
            const scrollPosition = window.scrollY;
            const windowHeigth = window.innerHeight;
            const scrollThresHold = windowHeigth * 0.1; // 10% de la altura de la pagina

            if (scrollPosition >= scrollThresHold) {
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () =>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return(
        <header className={`header ${isVisible ? "visible" : ""}`}>
            <img src="../../../img/logoRace.png" alt="Logo" className="logoHeader" />
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__list-items">Inicio</li>
                    <li className="menu__list-items">Eventos</li>
                    <li className="menu__list-items">Revista</li>
                    <li className="menu__list-items">Galeria</li>
                    <li className="menu__list-items">Nosotros</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header