import { useState } from "react";

import LoginScreen from "./src/screens/LoginScreen";
import LoadingScreen from "./src/screens/LoadingScreen";

export default function App() {
  const [tela, setTela] = useState("login");

  if (tela === "loading") {
    return <LoadingScreen />;
  }

  return <LoginScreen setTela={setTela} />;
}