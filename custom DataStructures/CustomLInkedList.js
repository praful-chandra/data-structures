class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index < 1) {
      return this.prepend(value);
    }
    let newNode = new Node(value);
    let leaderNode = this.getNodeAt(index - 1);
    newNode.next = leaderNode.next;
    leaderNode.next = newNode;
    this.length++;
  }

  delete(index) {
    let previousNode = this.getNodeAt(index - 1);
    let deleteNode = previousNode.next;
    previousNode.next = deleteNode.next;
    this.length--;
  }

  getNodeAt(index) {
    let count = 0;
    let currentNode = this.head;
    while (count < index) {
      curentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  printList() {
    let data = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      data.push(currentNode.data);
      currentNode = currentNode.next;
    }

    console.log(data);
  }
}

let ll = new LinkedList("hi");

ll.printList();

ll.append("wassup");
ll.printList();

ll.prepend("threre");
ll.printList();

ll.insert(1, "one");
ll.printList();

ll.delete(1);

ll.printList()
