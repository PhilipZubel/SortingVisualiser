export const bubbleSort = (
  array,
  animations = [],
  swapThisWithNext = [],
  sortedAnimations = []
) => {
  // swapThisWithNext, animations, sortedAnimations are lists of elements [k, counter]
  // swapThisWithNext has an element counter+1 because elements are first shown and later swapped
  // sortedAnimations keeps track when elements are sorted
  const len = array.length;
  let counter = 1;
  for (let i = 0; i < len - 1; i++) {
    for (let k = 0; k < len - i - 1; k++) {
      animations.push([k, counter + 0.01]);
      if (array[k] > array[k + 1]) {
        swapThisWithNext.push([k, counter + 1]);
        let temp = array[k];
        array[k] = array[k + 1];
        array[k + 1] = temp;
      }
      counter++;
    }
    sortedAnimations.push([len - i - 1, counter]);
  }
  counter++;
  sortedAnimations.push([0, counter]); // color the first element purple at the end

  return { array, animations, swapThisWithNext, sortedAnimations, counter };
};

export const selectionSort = (
  array,
  animations = [], // [firstEl, secondEl, counter]
  swapElements = [], // [firstEl, secondEl, counter]
  sortedAnimations = [] // [el, counter]
) => {
  const len = array.length;
  let counter = 1;
  let idx = 0;
  while (idx < len) {
    let minIdx = idx;
    for (let pointer = idx + 1; pointer < len; pointer++) {
      animations.push([minIdx, pointer, counter]);
      if (array[pointer] < array[minIdx]) {
        minIdx = pointer;
      }
      counter++;
    }
    if (idx !== minIdx) {
      swapElements.push([idx, minIdx, counter]);
      let temp = array[minIdx];
      array[minIdx] = array[idx];
      array[idx] = temp;
    }
    sortedAnimations.push([idx, counter]);
    counter++;
    idx++;
  }
  return { array, animations, swapElements, sortedAnimations, counter };
};

export const insertionSort = (
  array,
  animations = [], // [firstEl, secondEl, counter]
  swapElements = [], // [firstEl, secondEl, counter]
  sortedAnimations = [] // [el, counter]
) => {
  let counter = 1;
  let len = array.length;
  for (let i = 1; i < len; i++) {
    let current = array[i];
    let k = i - 1;
    while (k > -1 && current < array[k]) {
      array[k + 1] = array[k];
      animations.push([k, i, counter]);
      swapElements.push([k, k + 1, -1]);
      counter++;
      k--;
    }
    array[k + 1] = current;

    // set counter for swapElements
    let temp = 0; // used to avoid conflict between elements swapping at the same time
    let tempSwapIdx = swapElements.length - 1;
    while (tempSwapIdx >= 0 && swapElements[tempSwapIdx][2] === -1) {
      swapElements[tempSwapIdx][2] = counter + 0.001 * temp;
      tempSwapIdx--;
      temp++;
    }
  }

  for (let i = 0; i < len; i++) {
    sortedAnimations.push([i, counter]);
    counter++;
  }
  return { array, animations, swapElements, sortedAnimations, counter };
};

export const mergeSort = (
  arr,
  animations = [], // [idx, newValue, counter]
  eraseColors = [], // [counter]
  sortedAnimations = [] // [idx, counter]
) => {
  var counter = 1;
  var sorted = arr.slice();
  var len = sorted.length;
  var buffer = new Array(len);

  for (var size = 1; size < len; size *= 2) {
    for (var leftStart = 0; leftStart < len; leftStart += 2 * size) {
      var left = leftStart,
        right = Math.min(left + size, len),
        leftLimit = right,
        rightLimit = Math.min(right + size, len),
        i = left;
      while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
          animations.push([i, sorted[left], counter++]);
          buffer[i++] = sorted[left++];
        } else {
          animations.push([i, sorted[right], counter++]);
          buffer[i++] = sorted[right++];
        }
      }
      while (left < leftLimit) {
        animations.push([i, sorted[left], counter++]);
        buffer[i++] = sorted[left++];
      }
      while (right < rightLimit) {
        animations.push([i, sorted[right], counter++]);
        buffer[i++] = sorted[right++];
      }
      eraseColors.push(counter - 0.01);
    }
    var temp = sorted,
      sorted = buffer,
      buffer = temp;
  }
  for (let idx = 0; idx < arr.length; idx++) {
    sortedAnimations.push([idx, counter++]);
  }

  const array = sorted;
  return { array, animations, eraseColors, sortedAnimations, counter };
};

export const quickSort = (
  array,
  animations = [], // [idx, pivot, counter],
  swapElements = [], // [firstEl, secondEl, counter]
  sortedAnimations = [] // [idx, counter]
) => {
  var counter = 1;
  const quickSortAlgorithm = (arr, start, end, isStart = true) => {
    if (start >= end) {
      if (isStart) {
        sortedAnimations.push([start, counter++]);
      } else {
        sortedAnimations.push([end, counter++]);
      }
      return;
    }
    let index = partition(arr, start, end);
    sortedAnimations.push([index, counter++]);
    quickSortAlgorithm(arr, start, index - 1, true);
    quickSortAlgorithm(arr, index + 1, end, false);
    return arr;
  };

  const partition = (arr, start, end) => {
    let pivotIdx = start;
    let pivotValue = arr[end];
    for (let i = start; i < end; i++) {
      animations.push([i, pivotIdx, counter++]);
      if (arr[i] < pivotValue) {
        swapElements.push([i, pivotIdx, counter - 0.01]);
        let temp = arr[i];
        arr[i] = arr[pivotIdx];
        arr[pivotIdx] = temp;
        pivotIdx++;
      }
    }
    animations.push([end, pivotIdx, counter++]);
    swapElements.push([end, pivotIdx, counter - 0.01]);
    let temp = arr[pivotIdx];
    arr[pivotIdx] = arr[end];
    arr[end] = temp;
    return pivotIdx;
  };
  array = quickSortAlgorithm(array, 0, array.length - 1);
  return { array, animations, swapElements, sortedAnimations, counter };
};
