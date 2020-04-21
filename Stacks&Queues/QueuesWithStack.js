class Queue {
  constructor() {
    this.left = [];
    this.right = [];
    this.length = 0;
  }

  enqueue(value) {
    if (this.right.length === 0) {
      this.left.push(value);
      this.length++;
      return;
    }

    let rightSize = this.right.length;

    for (let i = 0; i < rightSize; i++) {
      this.left.push(this.right.pop());
    }
    this.left.push(value);
    this.length++;
    return;
  }

  dequeue() {
    if (this.length === 0) return;

    if (this.right.length === 0) {
      while (this.left.length > 1) {
        this.right.push(this.left.pop());
      }
      this.length--;
      return this.left.pop();
    }

    this.length--;
    return this.right.pop();
  }
}

let q = new Queue();

console.log(q);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

//console.log(q);

q.dequeue();

//console.log(q);

q.dequeue();

console.log(q);

q.enqueue(5);

console.log(q);

q.dequeue()

console.log(q);
