'use strict';

let { LinkedList } = require('./LinkedList');

class Stack {
  constructor() {
    this.top = null;
    this.storage = new LinkedList();
    this.maxStack = new LinkedList(); // Additional stack to track max values
  }

  push(value) {
    this.storage.insert(value);
    this.top = this.storage.head;

    // Push value on maxStack if its empty or value greater than or equal to current max
    if (this.maxStack.head === null || value >= this.maxStack.head.value) {
      this.maxStack.insert(value);
    }
  }

  pop () {
    if(this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    const poppedValue = this.top.value;
    const newTopNode = this.top.next;

    // Update stack to reflect removal of top element
    this.storage.head = newTopNode;
    this.top = newTopNode;

    // If the popped value is the current max, pop it from the maxStack as well
    if (poppedValue === this.maxStack.head.value) {
      this.maxStack.head = this.maxStack.head.next;
    }

    return poppedValue;
  }

  peek() {
    if(this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }

  getMax() {
    // Return the value at the top of the maxStack, which is the current maximum
    if (this.maxStack.head === null) {
      throw new Error('Stack is empty');
    }
    return this.maxStack.head.value;
  }
}

module.exports = {
  Stack,
};
