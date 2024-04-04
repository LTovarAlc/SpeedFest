import React from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import "./QRGenerator.css";

const QRGenerator = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Pasar los datos a través de la navegación programática
    navigate('/ValidatePass', { state: { data } });
  };

  return (
    <div className="qr-generator" onClick={handleClick}>
      {data && (
        <QRCode
          value={JSON.stringify(data)}
          size={200}
          renderAs={"svg"}
          level={"M"}
          className="qr-code"
        />
      )}
    </div>
  );
};

export default QRGenerator;
