import React, { useState } from "react";
import Textos from "./Textos.json";
import Escena from "./components/Escena/Escena";
import styled from "styled-components";

const MyContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 1.3fr;
  gap: 0px 0px;
  grid-template-areas:
    "Header"
    "Main";
  width: 100.2%;
  height: 92.1%;
`;

const MyMain = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.8fr 1.2fr;
  gap: 0px 0px;
  grid-template-areas:
    "text-area"
    "confirm-button";
  grid-area: Main;
  height: 70vh;
`;

const MyHeaderContainer = styled.div`
  grid-area: "Header";
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: flex-start;
  height: 100%;
`;

const MyHeader = styled.h1`
  order: 0;
  flex: 0.8 1 auto;
  align-self: center;
  text-align: center;
  font-size: 6rem;
  margin-top: 6rem;
  color: #6dd66d;
`;

const MyTextArea = styled.h3`
  grid-area: "text-area";
  order: 0;
  flex: 0.8 1 auto;
  align-self: center;
  text-align: center;
  font-size: 2rem;
  margin: 0 25%;
  line-height: 50px;
  letter-spacing: 3px;
  text-shadow: 0.5px 0.5px #800000;
  color: #4ef04e;
`;

const MyButton = styled.button`
  background-color: #34c2a3;
  border: 2px solid #518651;
  color: #2c352c;
  padding: 2rem 3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  margin: 4px 2px;
  margin-bottom: 12rem;
  border-radius: 50%;
  box-shadow: 3px 3px 3px 3px black;
  cursor: pointer;
  :hover {
    background-color: #50c234;
  }
`;

const ConfirmButtonArea = styled.div`
  grid-area: "confirm-button";
  order: 0;
  flex: 0.8 1 auto;
  align-self: center;
  text-align: center;
`;

function App() {
  const [session, setSession] = useState(false);

  if (session) {
    return (
      <>
        <Escena texto={Textos} />
      </>
    );
  } else
    return (
      <MyContainer className="container">
        <MyHeaderContainer className="Header">
          <MyHeader>Historia interactiva</MyHeader>
        </MyHeaderContainer>
        <MyMain>
          <MyTextArea className="text-area">
            Este es el prototipo de una aplicación tipo tutorial para una
            empresa. Te invitamos a conocer su funcionalidad clickando el
            siguiente botón:
          </MyTextArea>
          <ConfirmButtonArea className="confirm-button">
            <MyButton onClick={() => setSession(true)}>¿Te animás?</MyButton>
          </ConfirmButtonArea>
        </MyMain>
      </MyContainer>
    );
}

export default App;
