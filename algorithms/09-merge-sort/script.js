function merge(left, right) {
  if (!right || right.length === 0) {
    return left;
  }

  if (!left || left.length === 0) {
    return right;
  }

  const sorted = [];

  while(left.length > 0 || right.length > 0) {
    if (left.length > 0 && right.length > 0) {
      left[0] <= right[0] ? sorted.push(left.shift()) : sorted.push(right.shift());
    } else if (left.length > 0) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted;
}

function mergeSort(array) {
  if (array.length < 1) {
    return [];
  }

  if (array.length === 1) {
    return array;
  }

  const half = Math.round(array.length / 2);
  const left = [];
  const right = [];

  for (let i = 0, len = array.length; i < len; i++) {
    if (i < half) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...merge(mergeSort(left), mergeSort(right))];
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
