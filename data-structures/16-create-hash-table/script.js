let called = 0;
const hash = string => {
  called++;
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

class HashTable {
  constructor() {
    this.collection = {};
  }

  lookup(key) {
    const hashVal = hash(key);
    return this.collection[hashVal] && this.collection[hashVal][key] ? this.collection[hashVal][key] : null;
  };

  add(key, value) {
    const hashVal = hash(key);

    if (!this.collection[hashVal]) {
      this.collection[hashVal] = {};
    }
    this.collection[hashVal][key] = value;
  }

  remove(key) {
    const hashVal = hash(key);
    if (this.collection[hashVal] && this.collection[hashVal][key]) {
      delete this.collection[hashVal][key];
    }
    if (Object.keys(this.collection[hashVal]).length === 0) {
      delete this.collection[hashVal];
    }
  }

}
