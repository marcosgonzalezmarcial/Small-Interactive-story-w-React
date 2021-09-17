import React, { useState } from "react";
import LeftButton from "../buttons/LeftButton";
import RightButton from "../buttons/RightButton";
import Linea from "./Linea";

export default function Escena(props) {
  const state = {
    texto: props.texto,
  };
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador >= 3) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador === 0) {
      setContador(3);
    } else {
      setContador(contador - 1);
    }
  };

  return (
    <div className="flex-container">
      <section prop="hola" className="section-flex-item">
        <div className="buttons">
          <LeftButton restar={restar}>Anterior</LeftButton>
          <RightButton sumar={sumar}>Siguiente</RightButton>
        </div>

        {state.texto.map((text, index) => (
          <Linea
            texto={text}
            key={index}
            activo={index === contador ? true : false}
          ></Linea>
        ))}
      </section>
    </div>
  );
}
