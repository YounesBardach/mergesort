//Recursive Fibonacci Function

const fiboSeq = (number) => {
  const Seq = [];
  for (let i = 0; i < number; i++) {
    Seq.push(recufibo(i));
  }
  return Seq;
};

const recufibo = (number) => {
  if (number < 2) {
    return number;
  }
  return recufibo(number - 1) + recufibo(number - 2);
};

console.log([fiboSeq(7)]);

//MergeSort algorithm applied to an array

const testArrayOne = [-8, 2, 2, 3, 9];
const testArrayTwo = [-3, -2, -1, 0];
const testArrayThree = [-8, 8, -6, 1, 3, -9, 3, 2, 1];

const mergeSortedArrays = (arrayLeft, arrayRight) => {
  let sortedArray = [];
  while (arrayLeft.length && arrayRight.length) {
    if (arrayLeft[0] < arrayRight[0]) {
      sortedArray.push(arrayLeft.shift());
    } else {
      sortedArray.push(arrayRight.shift());
    }
  }
  return [...sortedArray, ...arrayLeft, ...arrayRight];
};

const mergeSortAlgo = (array) => {
  if (array.length < 2) {
    return array; // Base case: arrays with 0 or 1 elements are already sorted
  }

  const mid = Math.floor(array.length / 2); // Find the middle index
  const leftArray = array.slice(0, mid); // Create a copy of the left half using slice
  const rightArray = array.slice(mid); // Create a copy of the right half using slice

  // Recursively split and merge
  return mergeSortedArrays(mergeSortAlgo(leftArray), mergeSortAlgo(rightArray));
};

