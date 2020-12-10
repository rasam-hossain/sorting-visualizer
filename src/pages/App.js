import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "./Main";

import "./App.style.css";
import {bubbleSort} from "../helpers/sorting"
import SelectInput from "@material-ui/core/Select/SelectInput";
import {sleep} from "../helpers/index";

function App() {
  const [size, setSize] = useState(10);
  const [arr, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentNext, setCurrentNext] = useState(null);

  useEffect(() => {
    updateList();
  }, [size]);

  const updateList = () => {
    const randomArr = Array.from({ length: size }, () =>
      generateRandomBar(35, 500)
    );
    setArray(randomArr);
    console.log("arr: " + arr);
  };

  function generateRandomBar(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  //Change the range
  const rangeChange = () => {
    const range = prompt("Set your Range between 5 to 100");
    if (range < 5 || range > 100 ) {
      rangeChange();
    } else {
      setSize(range);
      console.log("range: " + range);
    }
  };

  const bubbleSortOnClick = async () => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        setCurrentIndex(i);
        setCurrentNext(i + 1);
          if (arr[j] > arr[j + 1]) {
              let tmp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = tmp;
              setArray([...arr]);
            }
        }
      await sleep(200);
    }
    setCurrentIndex(null);
    setCurrentNext(null);
  };
  
  return (
    <div className="App">
      <Header rangeChange={rangeChange} updateList={updateList} bubbleSortOnClick={bubbleSortOnClick}/>
      <Main data={arr} currentIndex={currentIndex} nextIndex={currentNext}></Main>
    </div>
  );
}

export default App;
