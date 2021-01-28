class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }

  // This method will return the union of 2 sets
  union(setB) {
    const set = new Set();
    const union = this.values().filter(i => !setB.values().includes(i)).concat(setB.values());
    union.forEach(e => { set.add(e) });
    return set;
  }

  intersection(setB) {
    const set = new Set();
    const intersection = this.values().filter(i => setB.values().includes(i));
    intersection.forEach(e => { set.add(e) });
    return set;
  }
}
