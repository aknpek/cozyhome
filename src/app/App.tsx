import "./App.css";

import React from "react";
import Landing from "../domain/landing/landing";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Minting } from "../domain/minter/Minting";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function getLibrary(provider: any) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} exact />
            {/* <Route path="/mint" component={Minting} exact /> */}
          </Switch>
        </BrowserRouter>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
