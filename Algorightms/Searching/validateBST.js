  //! NOT WORKING
  //TODO: FIX THIS !!!


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

  //! NOT WORKING
  //TODO: FIX THIS !!!
//     validateBST(){
//         if(this.root === null) return null;


//         let queue = [this.root];
//         let previousNode = this.root;
//         while(queue.length >0){
//             let currentNode = queue.shift();
//             // console.log("Current",currentNode.value);
//             // console.log("previous", currentNode.value);
            
//             if(currentNode.left){
//                 queue.push(currentNode.left);
//                 // console.log("left", currentNode.left.value);
                
//                 if(currentNode.left > previousNode) return false;
//             }
//             if(currentNode.right){
//                 queue.push(currentNode.right);
//                 // console.log("right", currentNode.right.value);

//                 if(currentNode.right < previousNode) return true;

//             }
//              previousNode = currentNode;

//         }
        
// return true;
//     }
  
  
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

