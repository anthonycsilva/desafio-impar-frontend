import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cars from "./components/Cars/Cars";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ModalBs from "./components/Modal/ModalPost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();
function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Cars />
        <ToastContainer />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
