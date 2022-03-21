import React, { useState } from "react";

// Componentes funcionales y recursos utilizados en el componente principal Escena
import LeftButton from "../buttons/LeftButton";
import RightButton from "../buttons/RightButton";
import Linea from "./Linea";
import ImagenesTextos from "../../ImagenesTextos";

export default function Escena(props) {
  const [imagenesTextos] = useState(props.ImagenesTextos);

  const [contador, setContador] = useState(0);

  const sumar = () =>
    contador >= 3 ? setContador(0) : setContador(contador + 1);

  const restar = () =>
    contador === 0 ? setContador(3) : setContador(contador - 1);

  return (
    <div
      style={{
        backgroundImage: `url(${ImagenesTextos[contador].img})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="flex-container"
    >
      <section prop="hola" className="section-flex-item">
        <div className="buttons">
          <LeftButton restar={restar}>Anterior</LeftButton>
          <RightButton sumar={sumar}>Siguiente</RightButton>
        </div>
        {imagenesTextos.map((objImgTxt, index) => (
          <Linea
            texto={objImgTxt.txt}
            key={index}
            activo={index === contador ? true : false}
          ></Linea>
        ))}
      </section>
    </div>
  );
}
