import { useState } from "react";

import LoginScreen from "./src/screens/LoginScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import MainScreen from "./src/screens/MainScreen";
import ImagemScreen from "./src/screens/ImagemScreen";

export default function App() {
  const [tela, setTela] = useState("login");

  if (tela === "loading") {
    return <LoadingScreen setTela={setTela} />;
  }

  if (tela === "main") {
    return <MainScreen />;
  }

  if (tela === "imagem") {
    return <ImagemScreen setTela={setTela} />;
  }

  return <LoginScreen setTela={setTela} />;
}