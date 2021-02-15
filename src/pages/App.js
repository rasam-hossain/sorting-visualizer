import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "./Main";

import "./App.style.css";
import { bubbleSort, mergeSort } from "../helpers/sorting";
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

  const mergeSortOnClick = () => {
    drawMergerSort(mergeSort(arr));
  };

  const drawMergerSort = async (returnedArrays) => {
    setDisableButton(true);
    for (var i = 0; i < returnedArrays.length; i++) {
      setArray(returnedArrays[i]);
      await sleep(2000);
    }
    setDisableButton(false);
    setCurrentIndex(null);
    setCurrentNext(null);
  };

  const mergeSort = () => {
    var array = arr;
    var arrays = [array.slice()];
    var n = array.length;
    var array0 = array;
    var array1 = new Array(n);

    for (var m = 1; m < n; m <<= 1) {
      for (var i = 0; i < n; i += m << 1) {
        merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
      }
      arrays.push(array1.slice());
      array = array0;
      array0 = array1;
      array1 = array;
    }

    function merge(left, right, end) {
      for (var i0 = left, i1 = right, j = left; j < end; ++j) {
        setCurrentIndex(left);
        setCurrentNext(right);
        array1[j] =
          array0[
            i0 < right && (i1 >= end || array0[i0] <= array0[i1]) ? i0++ : i1++
          ];
      }
    }
    return arrays;
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
