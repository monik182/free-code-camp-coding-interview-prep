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
}
