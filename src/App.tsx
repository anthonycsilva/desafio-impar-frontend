import React, { useState } from "react";
import NavbarBs from "./components/Navbar/NavbarBs";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import CardBs from "./components/Card/Card";
import Cars from "./components/Cars/Cars";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  const [newCarOpen ,setNewCarOpen] = useState<boolean>(true);
  const handleNewCar = () => {
    console.log(`clicked`);
  }
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        {newCarOpen && <>Bom dia</>}
        <Header onNewCarClick={handleNewCar}></Header>
        <Cars />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
