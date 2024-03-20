import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = () => {
  // Fecha objetivo: 29 de noviembre de 2024
  const targetDate = new Date("2024-11-29").getTime();

  // Estado para almacenar los valores de días, horas y segundos restantes
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Función para actualizar el tiempo restante
  const updateTimer = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeRemaining({ days, hours, minutes, seconds });
  };

  // Actualizar el temporizador cada segundo
  useEffect(() => {
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer__container">
      <div className="days"><span>Días</span>{timeRemaining.days}</div>
      <div className="hours"><span>Horas</span>{timeRemaining.hours}</div>
      <div className="minutes"><span>Minutos</span>{timeRemaining.minutes}</div>
      <div className="seconds"><span>Segundos</span>{timeRemaining.seconds}</div>
    </div>
  );
};

export default Timer;
