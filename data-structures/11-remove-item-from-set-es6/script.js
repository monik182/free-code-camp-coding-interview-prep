function checkSet() {
  const set = new Set([1, 2, 3, 4, 5]);
  [2, 5].forEach(e => { set.delete(e) });
  console.log(Array.from(set));
  return set;
}
