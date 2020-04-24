class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    let newNode = new Node(val);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  insert(val) {
    let newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  printLL(myHead) {
    let node = myHead || this.head;
    let arr = [];
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }

    console.log(arr);
  }
}

let l1 = new LinkedList(1);
l1.insert(0);
l1.insert(9);

let l2 = new LinkedList(5);
l2.insert(7);
l2.insert(8);

let l3 = new LinkedList(0);

l1 = l1.head;
l2 = l2.head;

let carry = 0;
while (l1 !== null || l2 !== null) {
  let num1 = l1 === null ? 0 : l1.val;
  let num2 = l2 === null ? 0 : l2.val;

  let sum = num1 + num2 + carry;

  carry = Math.floor(sum / 10);
  let sumNum = Math.floor(sum % 10);

  l3.insert(sumNum);

  if(l1 !== null) l1 = l1.next;
  if(l2 !== null) l2 = l2.next;


}

if(carry > 0){
    l3.insert(carry);
}

l3.printLL(l3.head.next);

// l1.printLL();
// l2.printLL();

// let printRevLL = (ll) => {
//   let nums = [];

//   let str = "";
//   while (ll) {
//     nums.push(ll.val);
//     ll = ll.next;
//   }

//   while (nums.length > 0) {
//     str += nums.pop();
//   }

//   return str;
// };

// let n = Number(printRevLL(l1.head)).toFixed();

// console.log(n);
