class Node {
  constructor(value) {
    this.value = value;
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

  printList() {
    let itemArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      itemArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(itemArray);
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index < 1) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    let leaderNode = this.getNodeAt(index-1);

    newNode.next = leaderNode.next;
    leaderNode.next = newNode;

  }

  remove(index){
      let LeaderNode = this.getNodeAt(index - 1);

      let CurrentNode = LeaderNode.next;
      
      let NextNode = CurrentNode.next;
      LeaderNode.next = NextNode;
  }

  getNodeAt(index){
      let count = 0;
      let currentIndex = this.head;
      while(count < index){
          currentIndex = currentIndex.next;
          count++
      }

      return currentIndex;
  }


}

let l1 = new LinkedList("U");

l1.append("P");
l1.append("E");
l1.prepend("S");

l1.printList();

l1.insert(2, "*");

l1.printList();

l1.remove(2)

l1.printList();
