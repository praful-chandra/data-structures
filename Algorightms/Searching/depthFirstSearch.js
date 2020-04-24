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
  
    
  
    deptFirstSearch() {
        console.log("inorder traversal")
      let inOrderDFS = this._InOrderDFS(this.root, []);
      console.log(inOrderDFS);
  
      console.log("preorder traversal")
      let preOrderDFS = this._PreOrderDFS(this.root, []);
      console.log(preOrderDFS);
  
      console.log("postorder traversal")
      let postOrderDFS = this._PostOrderDFS(this.root, []);
      console.log(postOrderDFS);
    }
  
    _InOrderDFS(currentNode, list) {
      if (currentNode.left) {
        this._InOrderDFS(currentNode.left, list);
      }
      list.push(currentNode.value);
      if (currentNode.right) {
        this._InOrderDFS(currentNode.right, list);
      }
      return list;
    }
    _PreOrderDFS(currentNode, list) {
      list.push(currentNode.value);
      if (currentNode.left) {
        this._PreOrderDFS(currentNode.left, list);
      }
      if (currentNode.right) {
        this._PreOrderDFS(currentNode.right, list);
      }
      return list;
    }
    _PostOrderDFS(currentNode, list) {
      if (currentNode.left) {
        this._PostOrderDFS(currentNode.left, list);
      }
      if (currentNode.right) {
        this._PostOrderDFS(currentNode.right, list);
      }
      list.push(currentNode.value);
      return list;
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
  

  
  tree.deptFirstSearch();
  
  // let res = JSON.stringify(traverse(tree.root));
  // console.log(res);
  
  // function traverse(node) {
  //   const tree = { value: node.value };
  //   tree.left = node.left === null ? null : traverse(node.left);
  //   tree.right = node.right === null ? null : traverse(node.right);
  //   return tree;
  // }
  