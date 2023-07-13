class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    let newNode = new Node(value);
    
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const precedingElem = this.top;
      this.top = newNode;
      this.top.next = precedingElem;
    }
    this.length++;
    return this;
  }
  pop(){
    const leader = this.top.next;
    this.top = leader;
    
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
console.log(myStack.push('google'));
// Stack {
//   top: Node { value: 'google', next: null },
//   bottom: Node { value: 'google', next: null },
//   length: 1
// }
console.log(myStack.push('udemy'));
// Stack {
//   top: Node { value: 'udemy', next: Node { value: 'google', next: null } },
//   bottom: Node { value: 'google', next: null },
//   length: 2
// }
console.log(myStack.peek())
// Node { value: 'udemy', next: Node { value: 'google', next: null } }
console.log(myStack.push('discord'));
// Stack {
//   top: Node {
//     value: 'discord',
//     next: Node { value: 'udemy', next: [Node] }
//   },
//   bottom: Node { value: 'google', next: null },
//   length: 3
// }
console.log(myStack.pop())
// Stack {
//   top: Node { value: 'udemy', next: Node { value: 'google', next: null } },
//   bottom: Node { value: 'google', next: null },
//   length: 2
// }
console.log(myStack.isEmpty())
// false
console.log(myStack.pop())
// Stack {
//   top: Node { value: 'google', next: null },
//   bottom: null,
//   length: 1
// }
console.log(myStack.peek())
// Node { value: 'google', next: null }
console.log(myStack.pop())
// Stack { top: null, bottom: null, length: 0 }
console.log(myStack.isEmpty())
// true