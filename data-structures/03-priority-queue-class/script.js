class PriorityQueue {

  constructor() {
    this.collection = [];
  }

  printCollection() {
    console.log(this.collection);
  }

  enqueue(value) {
    this.collection.push(value);
    this.sort();
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.collection.shift()[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length < 1;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.collection[0][0];
  }

  sort() {
    this.collection.sort((a, b) => {
      if (a[1] > b[1]) {
        return 1;
      }

      if (a[1] < b[1]) {
        return -1;
      }

      return 0;
    });
  }
}
