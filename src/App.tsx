import React from "react";
import NavbarBs from "./components/Navbar/NavbarBs";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import CardBs from "./components/Card/Card";
import Cars from "./components/Cars/Cars";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Cars />
    </React.Fragment>
  );
}

export default App;
