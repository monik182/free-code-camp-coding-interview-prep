function pairwise(arr, arg) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  const pairs = {};
  const used = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    for (let k = 0; k < len; k++) {
      if (!used.includes(i) && !used.includes(k) && i !== k && arr[i] + arr[k] === arg) {
        const key = [i, k].sort().join('');
        if (!pairs[key] || pairs[key].value > arr[i] + arr[k]) {
          pairs[key] = {value: arr[i] + arr[k], k, i};
          used.push(i);
          used.push(k);
        }
      }
    }
  }

  for (let p in pairs) {
    sum += pairs[p].k + pairs[p].i;
  }

  return sum;
}
