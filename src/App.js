import React from "react";
import Textos from "./Textos.json";
import Escena from "./components/Escena/Escena";

function App() {
  return <Escena texto={Textos} />;
}

export default App;
