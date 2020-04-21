class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = this.bottom;
      this.length++;
      return;
    }

    this.bottom.next = newNode;

    this.bottom = newNode;
    this.length++;
    return;
  }

  dequeue() {
    if (this.length === 0) return;
    let deNode = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = this.top;
      this.length--;
      return deNode;
    }

    this.top = deNode.next;
    this.length--;
    return deNode;
  }

  peek() {
    return this.top;
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q);

q.dequeue();
console.log(q);
