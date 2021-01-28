class Stack {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.collection[this.collection.length - 1];
  };

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.collection.pop();
  };

  push(value) {
    return this.collection.push(value);
  };

  clear() {
    this.collection = [];
  };

  isEmpty() {
    return this.collection.length < 1;
  };

}
