import React, { useState, useEffect } from "react";
import "./pageTicket.css";
import TicketForm from "./components/ticketForm";
import Loader from "./components/loader/loader";
import QRGenerator from "../../components/QRgenerator/QRGenerator";

const PageTicket = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [qrData, setQRData] = useState(null);
  const [showLoader, setShowLoader] = useState(false); // Inicialmente no mostrar el loader

  const handleFormSubmit = (formData) => {
    setFormVisible(false);
    setFormSubmitted(true);
    setQRData(formData);
    setShowLoader(true); // Mostrar el loader cuando se envíe el formulario
  };

  useEffect(() => {
    let timer;
    if (showLoader) {
      // Esperar 3 segundos antes de ocultar el loader
      timer = setTimeout(() => {
        setShowLoader(false);
      }, 3000);
    }

    return () => clearTimeout(timer); // Limpiar el temporizador en caso de que el componente se desmonte
  }, [showLoader]); // Ejecutar el efecto cada vez que cambie el estado de showLoader

  console.log("Codigo qr", qrData)

  return (
    <section className="pageTicket">
      <div className="pageTicket__content">
        <h1>¡SpeedFest te está esperando!</h1>
        <div className="form__container">
          <h2>Genera tu entrada</h2>
          {formVisible && <TicketForm onFormSubmit={handleFormSubmit} />}
          {showLoader && <Loader />}
          {formSubmitted && !showLoader && qrData && <QRGenerator data={qrData} />}
        </div>
      </div>
    </section>
  );
};

export default PageTicket;
