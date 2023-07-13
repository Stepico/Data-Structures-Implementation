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
console.log(myStack.push('udemy'));
console.log(myStack.peek())
console.log(myStack.push('discord'));
console.log(myStack.pop())
console.log(myStack.isEmpty())
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.isEmpty())