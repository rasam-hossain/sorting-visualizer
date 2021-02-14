import { sleep } from "../helpers/index";

// Bubble Sort
export const bubbleSort = async (
  arr,
  setCurrentIndex,
  setCurrentNext,
  callBack
) => {
  console.log("Bubble Sort Algorithm");

  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      setCurrentIndex(i);
      setCurrentNext(i + 1);

      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        callBack([...arr]);
      }
    }
    await sleep(100);
  }
};

// Merge Sort
export const mergeSort = async (
  arr,
  setCurrentIndex,
  setCurrentNext,
  callBack
) => {
  console.log("Merge Sort Algorithm");

  let len = arr.length;
  // this is where the implementation for merge sort will happen
};

// Heap Sort
export const heapSort = async (
  arr,
  setCurrentIndex,
  setCurrentNext,
  callBack
) => {
  console.log("Merge Sort Algorithm");

  let len = arr.length;
  // this is where the implementation for merge sort will happen
};

// Quick Sort
export const quickSort = async (
  arr,
  setCurrentIndex,
  setCurrentNext,
  callBack
) => {
  console.log("Merge Sort Algorithm");

  let len = arr.length;
  // this is where the implementation for merge sort will happen
};
export default {
  bubbleSort,
  mergeSort,
  heapSort,
  quickSort,
};
