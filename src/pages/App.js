import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "./Main";

import "./App.style.css";

function App() {
  const [size, setSize] = useState(50);
  const [arr, setArray] = useState([]);

  useEffect(() => {
    updateList();
  }, [size]);

  const updateList = () => {
    console.log("Updating the list");
    const randomArr = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 500)
    );
    console.log("randomArr:", randomArr);
    setArray(randomArr);
  };

  const rangeChange = () => {
    const range = prompt("Set your Range");
    console.log("range:", range);
    setSize(range);
  };

  return (
    <div className="App">
      <Header rangeChange={rangeChange} />
      <Main data={arr}></Main>
    </div>
  );
}

export default App;
