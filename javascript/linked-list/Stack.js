'use strict';

let { LinkedList } = require('./LinkedList');

class Stack {
  constructor() {
    this.top = null;
    this.storage = new LinkedList();
  }

  push(value) {
    this.storage.insert(value);
    this.top = this.storage.head;
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
}

module.exports = {
  Stack,
};
