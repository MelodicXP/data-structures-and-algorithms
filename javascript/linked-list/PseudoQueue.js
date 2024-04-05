'use strict';

let { Stack } = require('./Stack');

class QueueUsingStacks {
  constructor() {
    this.inboundStack = new Stack();
    this.outboundStack = new Stack();
  }

  // Add item to queue
  enqueue(value) {
    this.inboundStack.push(value);
  }

  // Remove and return item at front of queue
  dequeue() {
    this.prepareOutBoundStack();
    return this.outboundStack.pop();
  }

  // Move elements from inbound to outbound stack if outbound is empty
  prepareOutBoundStack() {
    if (this.outboundStack.isEmpty()) {
      while (!this.inboundStack.isEmpty()) {
        this.outboundStack.push(this.inboundStack.pop());
      }
    }
  }
}

module.exports = {
  QueueUsingStacks,
};
