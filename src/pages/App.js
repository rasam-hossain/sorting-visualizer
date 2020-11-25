import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "./Main";

import "./App.style.css";

function App() {
  const [size, setSize] = useState(10);
  const [arr, setArray] = useState([]);

  useEffect(() => {
    updateList();
  }, [size]);

  const updateList = () => {
    const randomArr = Array.from({ length: size }, () =>
      generateRandomBar(35, 500)
    );
    setArray(randomArr);
  };

  function generateRandomBar(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  const rangeChange = () => {
    const range = prompt("Set your Range between 5 to 100");
    if (range < 5 || range > 100 ) {
      rangeChange();
    } else
      setSize(range);
  };

  return (
    <div className="App">
      <Header rangeChange={rangeChange} updateList={updateList}/>
      <Main data={arr}></Main>
    </div>
  );
}

export default App;
