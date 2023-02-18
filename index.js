// mergeSort algorithm applied to an array

const testArrayOne = [-8, 2, 2, 3, 9];
const testArrayTwo = [-3, -2, -1, 0];
const testArrayThree = [-8, 8, -6, 1, 3, -9, 3, 2, 1];

const twoWayMergeSort = (arrayLeft, arrayRight) => {
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
// console.log(twoWayMergeSort(testArrayOne, testArrayTwo));

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const mid = array.length / 2;
  const rightArray = array.splice(0, mid);

  return twoWayMergeSort(mergeSort(array), mergeSort(rightArray));
};

console.log(mergeSort(testArrayThree));
