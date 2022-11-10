import React, { useState, useEffect } from "react";

function RelojTitle({ hora }) {
  return <h2>{hora}</h2>;
}

export default function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let tiempo;
    visible
      ? (tiempo = setInterval(() => {
          setHora(new Date().toLocaleTimeString());
        }, 1000))
      : clearInterval(tiempo);
  }, [visible]);

  return (
    <>
      <h2>Reloj en React</h2>
      {visible && <RelojTitle hora={hora} />}
      <button onClick={() => setVisible(true)}>Mostrar</button>
      <button onClick={() => setVisible(false)}>Ocultar</button>
    </>
  );
}
