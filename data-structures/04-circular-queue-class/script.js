class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;
    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item;
      this.write = this.next(this.write);
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read] !== null) {
      const value = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = this.next(this.read);
      return value;
    }
    return null;
  }

  next(value) {
    return value < this.max ? (value + 1) : 0;
  }

}
