import "./page404.css";

const Page404 = () => {
  return (
    <section className="page404">
      <div className="content__404-container">
        <div className="page404__titles">
          <h1>UPS!</h1>
          <h2>Algo dejo de funcionar</h2>
        </div>
        <div className="image404__container">
          <img src="../../../img/404img.jpeg" className="page404img" />
        </div>
        <span className="error__explanation">
          Es posible que la página que usted intenta visistar no exista o haya
          sido borrada
        </span>
      </div>
    </section>
  );
};

export default Page404;
