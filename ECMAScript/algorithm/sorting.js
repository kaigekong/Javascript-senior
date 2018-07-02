/* To be sorted Array */
const toBeSortedArr = [9, 4, 5, 3, 8, 6, 7, 2, 0, 1];
const ascendingArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const descendingArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

/* 
  Bubble sort
  Chrome-67.0.*
 */
const bubbleSort = (array) => {
  let i = array.length - 1,
    j = 0,
    tmp = null;

  for (; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

// console.info(`bubbleSort：${bubbleSort(toBeSortedArr)}`);


/* 
  Quick sort
  Chrome-67.0.*
  Uncaught RangeError: Maximum call stack size exceeded
*/
const quickSort = (array) => {

  if (array.length <= 1) return array;

  let partitionIndex = Math.floor(array.length / 2),
    tem = array[partitionIndex],
    left = [],
    right = [];

  for (let i = 0, len = array.length; i < len; i++) {
    if (array[i] < tem) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(tem, quickSort(right));
}

const quickSortS = (array) => {
  const swap = (arr, left, right) => {
    const tmp = arr[right];
    arr[right] = arr[left];
    arr[left] = tmp;
  }
  const partition = (arr, left, right) => {
    const pivotValue = arr[right];
    const storeIndex = left;
    for (let i = left; i < right; i++) {
      if (arr[i] <= pivotValue) {
        swap(arr, storeIndex, i);
        storeIndex++;
      }
    }
    swap(arr, right, storeIndex);
    return storeIndex;
  }
  const sort = (arr, left, right) => {
    if (left > right) return;
    const storeIndex = partition(arr, left, right);
    sort(arr, left, storeIndex - 1);
    sort(arr, storeIndex - 1, right);
  }
  sort(array, 0, array.length - 1);
  return array;
}

// console.info(`quickSort${quickSort(toBeSortedArr)}`);


/* 
  Merge sort
  Chrome-67.0.*
*/
const mergeHandler = (right, left) => {
  const tmpArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      tmpArr.push(left.shift());
    } else {
      tmpArr.push(right.shift());
    }
  }
  return tmpArr.concat(left, right);
}

const mergeSort = (array) => {
  if (array.length == 1) return array;
  const mid = Math.floor(array.length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid);

  return mergeHandler(mergeSort(left), mergeSort(right));
}

console.info(`mergeSort：${mergeSort(toBeSortedArr)}`);