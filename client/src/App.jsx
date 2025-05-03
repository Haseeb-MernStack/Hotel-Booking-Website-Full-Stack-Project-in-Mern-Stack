import React from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div className="font-bold text-blue-700">{!isOwnerPath && <Navbar />}</div>
  );
};

export default App;
