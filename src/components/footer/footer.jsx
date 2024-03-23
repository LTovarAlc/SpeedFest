import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__brand">
        <div className="footer__brands-img">
          <img
            src="../../../img/LogoPirelli.png"
            className="Pirelli__Logo-footer"
          />
          <img
            src="../../../img/logoRace.png"
            className="SpeedFest__Logo-footer"
          />
        </div>
        <span className="footer__slongan">
          "Una manera única de experimentar la adrenalina"
        </span>
      </div>
      <div className="footer__menus">
        <menu className="footer__about">
          <h3>Explora</h3>
          <ul>
            <li className="menus__links">Términos y condiciones</li>
            <li className="menus__links">Inicio</li>
            <li className="menus__links">Tienda de productos</li>
            <li className="menus__links">Contacto</li>
            <li className="menus__links">Blog</li>
            <li className="menus__links">Acerca de nosostros</li>
          </ul>
        </menu>
        <menu className="footer__socials">
          <h3>Síguenos:</h3>
          <ul>
            <li className="menus__links">Facebook</li>
            <li className="menus__links">Instagram</li>
            <li className="menus__links">Twitter</li>
            <li className="menus__links">YouTube</li>
          </ul>
        </menu>
      </div>
    </section>
  );
};

export default Footer;
