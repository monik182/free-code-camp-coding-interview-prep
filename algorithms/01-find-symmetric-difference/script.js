function sym(...args) {
  let diff = [];
  const returnUnique = (array = [], strict = false) => {
    return array.reduce((prev, curr, i, arr) => {
      if (strict) {
        if (arr.filter(x => x === curr).length === 1) {
          prev.push(curr);
        }
      } else {
        if (!prev.includes(curr)) {
          prev.push(curr);
        }
      }
      return prev;
    }, []);

  };

  args.forEach(set => {
    set = returnUnique(set.sort());
    diff = [...returnUnique([...diff, ...set], true)];
  });
  return diff;
}
