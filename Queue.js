class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    const newNode = new Node(value);
    
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const successor = this.last;
      this.last = newNode;
      successor.next = this.last;
    }
    this.length++;
    return this;
  }
  dequeue(){
    if (this.first === this.last) {
      this.last = null;
    }
    const nextInQueue = this.first.next;
    this.first = nextInQueue;
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue('Joy'));
// Queue {
//   first: Node { value: 'Joy', next: null },
//   last: Node { value: 'Joy', next: null },
//   length: 1
// }
console.log(myQueue.enqueue('Matt'));
// Queue {
//   first: Node { value: 'Joy', next: Node { value: 'Matt', next: null } },
//   last: Node { value: 'Matt', next: null },
//   length: 2
// }
console.log(myQueue.enqueue('Pavel'));
// Queue {
//   first: Node { value: 'Joy', next: Node { value: 'Matt', next: [Node] } },
//   last: Node { value: 'Pavel', next: null },
//   length: 3
// }
console.log(myQueue.enqueue('Samir'));
// Queue {
//   first: Node { value: 'Joy', next: Node { value: 'Matt', next: [Node] } },
//   last: Node { value: 'Samir', next: null },
//   length: 4
// }
console.log(myQueue.dequeue());
// Queue {
//   first: Node { value: 'Matt', next: Node { value: 'Pavel', next: [Node] } },
//   last: Node { value: 'Samir', next: null },
//   length: 3
// }
console.log(myQueue.dequeue());
// Queue {
//   first: Node { value: 'Pavel', next: Node { value: 'Samir', next: null } },
//   last: Node { value: 'Samir', next: null },
//   length: 2
// }
console.log(myQueue.dequeue());
// Queue {
//   first: Node { value: 'Samir', next: null },
//   last: Node { value: 'Samir', next: null },
//   length: 1
// }
console.log(myQueue.dequeue());
// Queue { first: null, last: null, length: 0 }
