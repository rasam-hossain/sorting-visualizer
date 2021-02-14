import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "./Main";

import "./App.style.css";
import { bubbleSort } from "../helpers/sorting";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { sleep } from "../helpers/index";

function App() {
  const [size, setSize] = useState(15);
  const [arr, setArray] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
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
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  //Change the range
  const rangeChange = () => {
    const range = prompt("Set your Range between 5 to 100");

    if ([null, ""].indexOf(range) === -1) {
      if (range < 5 || range > 100) {
        rangeChange();
      } else {
        setSize(range);
        console.log("range: " + range);
      }
    }
  };

  const bubbleSortOnClick = async () => {
    setDisableButton(true);
    await bubbleSort(arr, setCurrentIndex, setCurrentNext, setArray);
    setDisableButton(false);
    setCurrentIndex(null);
    setCurrentNext(null);
  };

  const mergeSortOnClick = (arr) => {
    // if the array is less than 2 numbers
    if (arr.length < 2) return arr;

    const middle = Math.floor(arr.length / 2);
    const arr_left = arr.slice(0, middle);
    const arr_right = arr.slice(middle, arr.length);
    const sorted_left = mergeSortOnClick(arr_left);
    const sorted_right = mergeSortOnClick(arr_right);
    return _mergeArrays(sorted_left, sorted_right);
  };

  const _mergeArrays = (left, right) => {
    const c = [];

    while (left.length && right.length) {
      c.push(left[0] > right[0] ? right.shift() : left.shift());
    }

    //if we still have values, let's add them at the end of `c`
    while (left.length) {
      c.push(left.shift());
    }
    while (right.length) {
      c.push(right.shift());
    }

    return c;
  };

  return (
    <div className="App">
      <Header
        rangeChange={rangeChange}
        updateList={updateList}
        bubbleSortOnClick={bubbleSortOnClick}
        mergeSortOnClick={mergeSortOnClick}
        disableButton={disableButton}
      />
      <Main
        data={arr}
        currentIndex={currentIndex}
        nextIndex={currentNext}
      ></Main>
    </div>
  );
}

export default App;
