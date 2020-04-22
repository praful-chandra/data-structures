class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let leaderNode = this._getLeaderNode(value);

    if (leaderNode.value === value) {
      return "Error, Item Alerady exists";
    }

    if (leaderNode.value > value) {
      leaderNode.left = newNode;
    } else {
      leaderNode.right = newNode;
    }
  }

  _getLeaderNode(value) {
    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          return currentNode;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          return currentNode;
        }
        currentNode = currentNode.left;
      }
    }
  }

  lookup(value) {
    let leaderNode = this._getLeaderNode(value);
    if (leaderNode.value === value) {
      return leaderNode;
    } else {
      return null;
    }
  }



  remove(value) {
      


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

let res = JSON.stringify(traverse(tree.root));
console.log(res);

tree.remove(65);
tree.remove(72);

res = JSON.stringify(traverse(tree.root));
console.log(res);  
  
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
