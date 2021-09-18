import React, { useState } from "react";
import Escena from "./components/Escena/Escena";
import LandPage from "./components/LandPage/LandPage";
import ImagenesTextos from "./ImagenesTextos";

function App() {
  const [session, setSession] = useState(false);
  const setStateSession = () => setSession(true);

  if (session) {
    return <Escena ImagenesTextos={ImagenesTextos} />;
  } else return <LandPage setSession={setStateSession} />;
}

export default App;
