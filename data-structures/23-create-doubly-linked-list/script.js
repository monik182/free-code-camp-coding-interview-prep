class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    if (this.head === null) {
      const newNode = new Node(value, null);
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let node = this.head;
    while (node.next !== null) {
      node = node.next
    }
    const newNode = new Node(value, node);
    node.next = newNode;
    this.tail = newNode;
  }

  remove(value) {
    if (this.head === null) {
      return null;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }

    if (this.tail.data === value) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    }

    let node = this.head;
    while (node.data !== value) {
      node = node.next;
    }

    let prevNode = node.prev;
    prevNode.next = node.next;
    node.next.prev = prevNode;
  }
}


