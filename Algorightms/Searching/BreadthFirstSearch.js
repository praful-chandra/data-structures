// * Creating a Binary Search tree

class Node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      return (this.root = newNode);
    }

    const parentNode = this.getParentNode(value);

    if (value > parentNode.value) {
      parentNode.right = newNode;
    } else {
      parentNode.left = newNode;
    }
  }

  getParentNode(value) {
    let currentNode = this.root;

    while (true) {
      if (currentNode.value === value) {
        throw Error("Element alredy exists !");
      }

      if (value > currentNode.value) {
        if (currentNode.right === null) {
          return currentNode;
        }
        currentNode = currentNode.right;
      }

      if (value < currentNode.value) {
        if (currentNode.left === null) {
          return currentNode;
        }
        currentNode = currentNode.left;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let queue = [];
    let items = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      items.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    console.log(items);
  }

  breadthFirstSearchR() {
    let list = this._recursiveBSF([this.root], []);

    console.log(list);
  }

  _recursiveBSF(queue, list) {
    if (queue.length === 0) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    return this._recursiveBSF(queue, list);
  }

  
}

const tree = new BST();
tree.insert(41);
tree.insert(20);
tree.insert(65);
tree.insert(11);
tree.insert(50);
tree.insert(91);
tree.insert(29);
tree.insert(32);
tree.insert(72);
tree.insert(99);
  
tree.breadthFirstSearch();
tree.breadthFirstSearchR();


// let res = JSON.stringify(traverse(tree.root));
// console.log(res);

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
