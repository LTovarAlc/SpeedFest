import React from "react";
import { useLocation } from "react-router-dom";
import QRGenerator from "../../components/QRgenerator/QRGenerator";
import "./validatePass.css";

const ValidatePassPage = () => {

  const location = useLocation();
  const data = location.state?.data;

  if (!data) {
    // Si data es null, puedes mostrar un mensaje de carga o algo similar.
    return <div>Cargando...</div>;
  }
  
  console.log("datos recibidos", data)

  return (
    <section className="validatePass-page">
      <div className="validatePass-content">
        <div className="ticketPass">
          <div className="user__info">
            <span className="user__info-name">Nombre: {data.name}</span>
            <span>Correo: {data.email}</span>
            <span>Acompañantes: {data.select}</span>
          </div>
          <img src="../../../../img/perrosDePlata.png" className="ticketPass-img" />
          {/* <QRGenerator data={data} /> */}
        </div>
      </div>
    </section>
  );
};

export default ValidatePassPage;
