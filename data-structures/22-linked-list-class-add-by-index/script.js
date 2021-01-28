function LinkedList() {
  let length = 0;
  let head = null;

  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }

  this.head = () => {
    return head;
  };

  this.size = () => {
    return length;
  };

  this.add = element => {
    const node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      let listNode = head;
      while (listNode.next !== null) {
        listNode = listNode.next;
      }
      listNode.next = node;
    }
    length++;
  };

  this.remove = element => {
    if (length === 0) {
      return;
    }

    if (head.element === element) {
      head = head.next;
    } else {
      let node = head;
      while (node.next !== null && node.next.element !== element) {
        node = node.next;
      }
      if (node.next === null || node.next.element !== element) {
        return;
      }

      node.next = node.next.next;
    }

    length--;
  };

  this.indexOf = element => {
    if (head === null) {
      return -1;
    }
    let node = head;
    let count = 0;
    while (node.next !== null) {
      if (node.element === element) {
        return count;
      }
      count++;
      node = node.next;
    }
    return -1;
  };

  this.elementAt = index => {
    console.log({length, index}, index >= length);
    if (index >= length) {
      return undefined;
    }

    let node = head;
    for (let i = 0; i < length; i++) {
      if (i === index) {
        return node.element;
      }
      node = node.next;
    }
  };

  this.isEmpty = () => {
    return length === 0;
  };

  this.removeAt = index => {
    if (index < 0 || index >= length) {
      return null;
    }

    let node = head;
    if (index === 0) {
      head = head.next;
      length--;
      return node.element;
    }

    let i = 0;
    while (i + 1 !== index) {
      node = node.next;
      i++;
    }

    const deletedNode = node.next;
    node.next = node.next.next;
    length--;
    return deletedNode.element;
  };

  this.addAt = (index, element) => {
    if (index < 0 || index >= length) {
      return false;
    }

    let node = head;
    if (index > 0) {
      let i = 0;
      while (i + 1 !== index) {
        node = node.next;
        i++;
      }
    }

    const newNode = new Node(element);
    newNode.next = node.next;

    if (index === 0) {
      head = newNode;
    } else {
      node.next = newNode;
    }

    length++;
  };

}

const linkedList = new LinkedList();

linkedList.add('a');
linkedList.add('b');
linkedList.add('c');
linkedList.add('d');
linkedList.add('e');
// console.log('ELEMENT AT > ', linkedList.elementAt(6));
// console.log('ELEMENT AT > ', linkedList.elementAt(2));
// console.log('HEAD> ', linkedList.head());
// console.log('SIZE> ', linkedList.size());
console.log('ADD AT > ', linkedList.addAt(2, 'X'));
console.log('HEAD> ', JSON.stringify(linkedList.head()));
console.log('SIZE> ', linkedList.size());
