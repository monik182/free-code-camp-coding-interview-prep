class Queue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  enqueue(value) {
    this.collection.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.collection.shift();
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
    return this.collection[0];
  }
}
