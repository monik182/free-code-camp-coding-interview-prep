class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  add(value) {
    if (!this.has(value)) {
      this.dictionary[value] = value;
      this.length++;
      return true;
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.dictionary[value];
      this.length--;
      return true;
    }
    return false;
  }

  size() {
    return this.length;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

}
