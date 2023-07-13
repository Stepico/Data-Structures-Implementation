class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
    this.array.pop();
    return this;
  }
  isEmpty() {
    return this.array.length === 0;
  }
}

const myStack = new Stack();
console.log(myStack.push('google')); // Stack { array: [ 'google' ] }
console.log(myStack.push('udemy')); // Stack { array: [ 'google', 'udemy' ] }
console.log(myStack.peek()) // udemy
console.log(myStack.push('discord')); // Stack { array: [ 'google', 'udemy', 'discord' ] }
console.log(myStack.pop()) // Stack { array: [ 'google', 'udemy' ] }
console.log(myStack.isEmpty()) // false
console.log(myStack.pop()) // Stack { array: [ 'google' ] }
console.log(myStack.peek()) // google
console.log(myStack.pop()) // Stack { array: [] }
console.log(myStack.isEmpty()) // true