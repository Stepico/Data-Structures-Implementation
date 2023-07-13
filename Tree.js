class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currNode = this.root;

      while(true) {
        if (value < currNode.value) {
          // left
          if (!currNode.left) {
            currNode.left = newNode;
            return this;
          }
          currNode = currNode.left;
        } else {
          // right
          if (!currNode.right) {
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right;
        }
      }
    }
  }
  lookup(value){
    if (!this.root) {
      return false;
    }

    let currNode = this.root;

    while(currNode) {
      if (value < currNode.value) {
        // left
        currNode = currNode.left;
      }
      else if (value > currNode.value) {
        // right
        currNode = currNode.right;
      }
      else if (value === currNode.value) {
        return currNode;
      }
    }

    return false;
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// Here is the tree we got
//     9
//  4     20
//1  6  15  170

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))
// {"value":9,"left":{"value":4,"left":{"value":1,"left":null,"right":null},"right":{"value":6,"left":null,"right":null}},"right":{"value":20,"left":{"vau 
// e":15,"left":null,"right":null},"right":{"value":170,"left":null,"right":null}}}
console.log(tree.lookup(6))
// Node { left: null, right: null, value: 6 }
console.log(tree.lookup(9))
// Node {
//   left: Node {
//     left: Node { left: null, right: null, value: 1 },
//     right: Node { left: null, right: null, value: 6 },
//     value: 4
//   },
//   right: Node {
//     left: Node { left: null, right: null, value: 15 },
//     right: Node { left: null, right: null, value: 170 },
//     value: 20
//   },
//   value: 9
// }
console.log(tree.lookup(14))
// false