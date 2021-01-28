function bubbleSort(array) {
  for (let i = 0, len = array.length; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      const current = array[j];
      if (current > array[j + 1]) {
        array[j] = array[j + 1];
        array[j + 1] = current;
      }
    }
  }
  return array;
}
