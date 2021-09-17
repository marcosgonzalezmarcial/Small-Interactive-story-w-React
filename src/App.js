import React, { useState } from "react";
import Textos from "./Textos.json";
import styled from "styled-components";

function App() {
  function Escena(props) {
    const [texto, setTexto] = useState(props.texto);
    const [contador, setContador] = useState(0);

    const sumar = () => {
      if (contador >= 3) {
        setContador(0);
      } else {
        setContador(contador + 1);
      }
    };

    return (
      <div className="flex-container">
        <section className="section-flex-item">
          <div className="buttons">
            <button className="leftButton">Anterior</button>
            <button onClick={sumar} className="rightButton">
              Siguiente
            </button>
          </div>
          {texto.map((text, index) => (
            <p
              className={`p-escena ${
                index === contador ? "enable" : "disabled"
              }`}
            >
              {text}
            </p>
          ))}
        </section>
      </div>
    );
  }

  return <Escena texto={Textos} />;
}

export default App;
