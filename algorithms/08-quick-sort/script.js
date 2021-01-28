function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array.shift();
  return [...quickSort(array.filter(el => el <= pivot)), pivot, ...quickSort(array.filter(el => el > pivot))]
}
