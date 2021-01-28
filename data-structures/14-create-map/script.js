class Map {
  constructor() {
    this.collection = {};
  }

  add(key, value) {
    this.collection[key] = value;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.collection[key];
    }
  }

  get(key) {
    return this.has(key) ? this.collection[key] : null;
  }

  has(key) {
    return !!this.collection[key];
  }

  values() {
    return Object.values(this.collection);
  }

  size() {
    return this.values().length;
  }

  clear() {
    this.collection = {};
  }
}
