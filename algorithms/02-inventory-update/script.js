function updateInventory(storedInv, newInv) {
  const inv = {};
  [...storedInv, ...newInv].forEach(item => {
    const [quantity, name] = item;
    if (!inv[name]) {
      inv[name] = 0;
    }
    inv[name] += quantity;
  });

  storedInv = [];
  for (const prop in inv) {
    storedInv.push([inv[prop], prop]);
  }

  storedInv.sort((a, b) => {
    const nA = a[1];
    const nB = b[1];
    if (nA > nB) return 1;
    if (nA < nB) return -1;
    return 0;
  });
  return storedInv;
}

