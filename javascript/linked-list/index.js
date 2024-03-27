'use strict';

let {LinkedList, zipLists} = require('./LinkedList');
const { Stack } = require('./Stack');
const { Queue } = require('./Queue');

/*--------------Testing Linked List Methods------------------------- */
// Create two linked lists
const list1 = new LinkedList();
const list2 = new LinkedList();

// Populate list1
list1.insert(1);
list1.append(3);
list1.append(5);

// Populate list2
list2.insert(2);
list2.append(4);
list2.append(6);

// Zip the lists
const zippedList = zipLists(list1, list2);
console.log('Zipped List:', zippedList.toString());

// Reverse List
zippedList.reverseLinkedList();
console.log('Reversed List:', zippedList.toString());

/*--------------Testing Stack--------------------------------------- */
// Create a new Stack
const myStack = new Stack();

// Push items onto the stack
myStack.push('apple');
myStack.push('banana');
myStack.push('cherry');

console.log('After pushing 3 items, the top item is:', myStack.peek());

// Pop items from the stack
console.log('Popped item:', myStack.pop());
console.log('Popped item:', myStack.pop());
console.log('After popping 2 items, the top item is:', myStack.peek());

// Check if the stack is empty
console.log('Is the stack empty?', myStack.isEmpty());

// Pop the last item
console.log('Popped item:', myStack.pop());
console.log('Is the stack empty after popping all items?', myStack.isEmpty());

/*--------------Testing Queue--------------------------------------- */
// Create a new Queue
const myQueue = new Queue();

// Enqueue items into the queue
myQueue.enqueue('apple');
myQueue.enqueue('banana');
myQueue.enqueue('cherry');

console.log('After enqueueing 3 items, the front item is:', myQueue.peek());

// Dequeue items from the queue
console.log('Dequeued item:', myQueue.dequeue());
console.log('Dequeued item:', myQueue.dequeue());
console.log('After dequeueing 2 items, the front item is:', myQueue.peek());

// Check if the queue is empty
console.log('Is the queue empty?', myQueue.isEmpty());

// Dequeue the last item
console.log('Dequeued item:', myQueue.dequeue());
console.log('Is the queue empty after dequeueing all items?', myQueue.isEmpty());
