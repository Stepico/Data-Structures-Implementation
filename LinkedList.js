class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = new Node(value)

    this.tail.next = node;
    this.tail = node
    this.length++;
  }
  prepend(value) {
    const node = new Node(value)
    node.next = this.head

    this.head = node;
    this.length++;
  }
  printList() {
    let nd = this.head;
    const arr = [];

    while(nd !== null) {
      arr.push(nd.value);
      nd = nd.next;
    }

    return arr;
  }
  insert(pos, val) {
    let currNode = this.head;
    let cnt = 0

    while (cnt !== pos - 1) {
      currNode = currNode.next;
      cnt++;
    }

    let nextNode = currNode.next;
    
    const newNode = {
      value: val,
      next: null
    };

    currNode.next = newNode;
    newNode.next = nextNode;
  }
  
  remove(pos) {
    let currNode = this.head;
    let cnt = 0;
    
    while (cnt !== pos - 1) {
      currNode = currNode.next;
      cnt++;
    }

    let nodeToDelete = currNode.next;
    let nextNode = nodeToDelete.next;

    currNode.next = nextNode;
    this.length--;
  }
}

let myLinkedList = new LinkedList(10); // [10]
myLinkedList.append(5); // [10, 5]
myLinkedList.append(16); // [10, 5, 16]
myLinkedList.prepend(4); // [4, 10, 5, 16]
myLinkedList.insert(2, 7); // [4, 10, 7, 5, 16]
myLinkedList.remove(3); // [4, 10, 7, 16]
console.log(myLinkedList.printList())