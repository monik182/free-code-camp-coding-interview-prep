function checkSet() {
  const set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  ['Taco', 'Cat', 'Awesome'].forEach(e => { set.add(e) });
  console.log(Array.from(set));
  return set;
}
