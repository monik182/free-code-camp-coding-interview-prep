function hasRepeated(string) {
  let repeated = 0;
  for (let i = 0, len = string.length; i < len - 1; i++) {
    if (string[i] === string[i + 1]) {
      repeated++;
    }
  }
  return !!repeated;
}

function findPermutation(string, arr, perm = []) {
  if (arr.length > 0) {
    for (let i = 0, len = arr.length; i < len; i++) {
      const array = [...arr];
      array.splice(i, 1);
      findPermutation(string + arr[i], array, perm);
    }
  } else {
    if (!hasRepeated(string)) {
      perm.push(string);
    }
  }
  console.log(perm);
  return perm;
}

function permAlone(str) {

  if (str.length === 1) {
    return 1;
  }

  if (str.length === 0 || [...str.matchAll(str[0])].length === str.length) {
    return 0;
  }

  const permutations = findPermutation('', str.split(''));
  return permutations.length;
}

