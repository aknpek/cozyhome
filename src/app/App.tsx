import "./App.css";

import Landing from "../domain/landing/landing";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

function getLibrary(provider: any) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="MainApp">
        <Landing />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
