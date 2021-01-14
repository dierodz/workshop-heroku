import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState();
  const fetch = useCallback(async () => {
    try {
      const result = await axios.get("/products");
      if (result?.data) setCount(result.data.length);
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {count || "Cargando..."}
      </header>
    </div>
  );
}

export default App;
