class Node {
    constructor(value){
        this.previous = null;
        this.value = value;
        this.next = null;
    }


}


class DoubleLinkedlist{
    constructor(value){
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let newNode = new Node(value);
        let currentNode = this.head;
        currentNode.next  = newNode;
        newNode.previous = currentNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index,value){
        if(index >= this.length){
            this.append(value);
        }
        if(index < 1){
            this.prepend(value);
        }

        let newNode = new Node(value);
        let leaderNode = this.getNodeAt(index-1);

        newNode.previous = leaderNode;
        newNode.next = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next.previous = newNode;

        this.length++;
    }

    remove(index){
        if(index > this.length || index < 0){
            return;
        }

        let leaderNode = this.getNodeAt(index-1);
        let deleteNode = leaderNode.next;
         leaderNode.next = deleteNode.next;
        deleteNode.next.previous = leaderNode;
    }

    getNodeAt(index){
        let count = 0;
        let currentNode = this.head;
        while(count < index){
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    printList() {
        let data = [];
        let currentNode = this.head;
    
        while (currentNode !== null) {
          data.push(currentNode.value);
          currentNode = currentNode.next;
        }
    
        console.log(data);
      }

    printListRev(){
        let data = [];
        let currentNode = this.tail;
        while(currentNode !== null){
            data.push(currentNode.value);
            currentNode = currentNode.previous;
        }

        console.log(data);
        
    }
}

let dll = new DoubleLinkedlist("init");

dll.append("one")

dll.prepend("0")

dll.insert(1,"insert")

dll.remove(1)
dll.printList();

dll.printListRev();