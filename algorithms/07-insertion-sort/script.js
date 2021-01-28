function insertionSort(array) {
  let enters = 0;
  let changes = 0;
  do {
    enters++;
    changes = 0;
    for (let i = 0, len = array.length - 1; i < len; i++) {
      if (array[i] > array[i + 1]) {
        changes++;
        const temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  } while (changes > 0);

  return array;
}
