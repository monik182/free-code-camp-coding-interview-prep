function selectionSort(array) {
  for (let i = 0, len = array.length; i < len; i++) {
    let min;
    for (let j = i; j < len; j++) {
      if (!min || array[j] < min) {
        min = array[j];
        array[j] = array[i];
        array[i] = min;
      }
    }
  }
  return array;
}
