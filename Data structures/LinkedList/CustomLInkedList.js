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
    if (index > this.length) {
      return this.append(value);
    }
    if (index <= 1) {
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
    let count = 1;
    let currentNode = this.head;
    while (count < index) {
      currentNode = currentNode.next;
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

  //! O(n^2)
  //   reverseList() {
  //     let count = this.length - 1;
  //     let lastNode = this.tail;
  //     let end = this.tail;
  //     while (count >= 0) {
  //       let previous = this.getNodeAt(count);
  //       lastNode.next = previous;
  //       lastNode = previous;
  //       count--;
  //     }

  //     this.head = end;
  //     this.tail = lastNode;
  //     this.tail.next = null;
  //   }

  //! O(n)
  reverseList() {
    this.tail = this.head;

    let previousNode = null;
    let currentNode = this.head;
    let nextNode = null;

    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.head = previousNode;
  }

  printReverse() {
    this._recursiveReverse(this.head);
  }

  _recursiveReverse(node) {
    if (node === null) {
      return;
    }
    this._recursiveReverse(node.next);
    console.log(node.data);
  }

  printReverseWithRecursion(){

    if(this.length < 2){
        this.printList();
        return;
    }

      this.reverseListByRecoursion(this.head);

      this.printList();
  }

  reverseListByRecoursion(node) {
    this.tail = node;

    if (node.next === null) {
      this.head = node;
      return;
    }

    this.reverseListByRecoursion(node.next);
    node.next.next = node;
    node.next = null;
  }
}

let ll = new LinkedList(2);

ll.append(3);

 ll.prepend(1);

 ll.append(4);

ll.printList();  
ll.printReverseWithRecursion();

//console.log(ll);

//ll.reverseList()
