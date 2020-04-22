class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return;
  }

  pop() {
    if (this.length === 0) return;

    let popNode = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = this.top;
      this.length--;
      return popNode;
    }
    this.top = popNode.next;
    this.length--;
    return popNode;
  }

  peek() {
    return this.top;
  }
}

let st = new Stack();

st.push(1);
st.push(2);
st.push(3);

console.log(st.peek());

st.pop();
st.pop();
st.pop();

console.log(st.peek());
