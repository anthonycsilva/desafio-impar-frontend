import React, { useState } from "react";
import NavbarBs from "./components/Navbar/NavbarBs";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import CardBs from "./components/Card/Card";
import Cars from "./components/Cars/Cars";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ModalBs from "./components/Modal/Modal";

const queryClient = new QueryClient();
function App() {
  const [newCarOpen, setNewCarOpen] = useState<boolean>(false);
  const handleNewCar = () => {
    setNewCarOpen((old) => !old);
  };
  const handleOnCloseModal = () => {
    setNewCarOpen((old) => !old);
  };
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        {newCarOpen && (
          <ModalBs show={newCarOpen} onCloseModal={handleOnCloseModal} />
        )}
        <Header onNewCarClick={handleNewCar}></Header>
        <Cars />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
