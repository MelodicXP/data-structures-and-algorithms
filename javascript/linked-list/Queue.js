'use strict';

let { LinkedList, Node } = require('./LinkedList');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.storage = new LinkedList();
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.back === null) { // if queue is empty
      this.front = this.back = newNode; // new node is both front and back
      this.storage.head = newNode; // set head of linked list
    } else {
      this.back.next = newNode; // link new node to end of queue
      this.back = newNode; // update back to new node
    }
  }

  dequeue() {
    if(this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    const dequeuedValue = this.front.value;
    this.front = this.front.next; // removes node from front of queue

    if(this.isEmpty()) { // if queue becomes empty
      this.back = null; // reset back pointer as well
    }

    return dequeuedValue;
  }

  peek() {
    if(this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  Queue,
};
