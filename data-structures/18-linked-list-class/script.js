function LinkedList() {
  let length = 0;
  let head = null;

  const Node = element => {
    this.element = element;
    this.next = null;
  };

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
}
