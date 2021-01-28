function checkSet(arrToBeSet, checkValue){
  const set = new Set(arrToBeSet);
  const hasElement = set.has(checkValue);
  const setSize = set.size;
  return [hasElement, setSize];
}
