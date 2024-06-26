// En Button.js
import React from "react";
import "./button.css";

const Button = ({ text }) => {
  return (
    <button type="submit" className="btn-submit btn">
      <span>{text}</span>
    </button>
  );
};

export default Button;
