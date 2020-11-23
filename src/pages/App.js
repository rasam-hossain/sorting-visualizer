import React, { useState } from "react";
import Header from "../components/Header";
import "./App.style.css";

function App() {
  const [value, setValue] = useState(5);
  const rangeChange = () => {
    const range = prompt("Set your Range");
    setValue(range);
  };

  return (
    <div className="App">
      <Header rangeChange={rangeChange} />
      <p>{value}</p>
    </div>
  );
}

export default App;
