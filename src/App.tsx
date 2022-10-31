import React from "react";
import NavbarBs from "./components/Navbar/NavbarBs";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import CardBs from "./components/Card/Card";
import Cars from "./components/Cars/Cars";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Header></Header>
        <Cars />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
