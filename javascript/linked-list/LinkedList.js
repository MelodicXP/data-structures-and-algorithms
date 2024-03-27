'use strict';

// Create node
class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Initialize list as empty (head point to null)
  }

  insert(value) {
    // Create a new node and make it new head of the list
    this.head = new Node(value, this.head);
    // or could use this code:
    // const oldHead = this.head;
    // this.head = new Node(value);
    // this.head.next = oldHead;
  }

  // Add new node with given value to end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      //If list is empty, new node becomes head
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      // Traverse list until reach last node
      current = current.next;
    }

    // Make last node's 'next' property point to the new node
    current.next = newNode;
  }

  // Add new node with given value immediately before first node that has value specified
  insertBefore(value, newValue) {
    // If list is empty do nothing
    if (!this.head) return;

    if (this.head.value === value) {
      // If head is the node to insert before, make new head
      this.head = new Node(newValue, this.head);
      return;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      // Traverse until finding the node right before the target node
      current = current.next;
    }

    if (current.next) {
      // Insert new node before target node
      const newNode = new Node(newValue, current.next);
      current.next = newNode;
    }
  }

  // Add a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue) {

    let current = this.head;

    while (current && current.value !== value) {
      // Traverse list until find target node
      current = current.next;
    }

    if (current) {
      // Insert new node after target node
      const newNode = new Node(newValue, current.next);
      current.next = newNode;
    }
  }

  // Convert linked list to string
  toString() {
    let current = this.head; // Start from head of list
    let text = '';
    while (current) { // Go through linked list, while current !NULL
      text += `{ ${ current.value } } -> `; // Join strings
      current = current.next; // Move to next link/node
    }
    return text + 'NULL'; // return '{ banana } -> { apple } -> NULL';
  }

  // Return true when finding value in linked list that exists
  // Return false when searching for value in linked list that does NOT exist
  includes(value){
    let current = this.head; // Start from head of list
    while (current) { // Traverse list while current is !NULL
      if (current.value === value) {
        return true;
      }
      current = current.next; // Move to next node
    }
    return false; // Value not found after traversing list
  }

  kthFromEnd(k) {
    let current = this.head;
    let length = 0;
    // First, traverse the whole list to find out its length
    while (current) {
      length++;
      current = current.next;
    }

    // If k is out of the bounds of the list, return null or a message
    if (k < 0 || k >= length) {
      return 'k is out of the bounds of the linked list';
    }

    // Calculate the position from the start (0-indexed)
    let target = length - k - 1;
    current = this.head;
    // Traverse again to find the kth node from the end
    for (let i = 0; i < target; i++) {
      current = current.next;
    }

    // Return the value of the kth node from the end
    return current.value;
  }

  reverseLinkedList() {
    let previous = null;
    let current = this.head;
    let next = null;

    while(current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}

function zipLists(list1, list2) {
  if (!list1.head || !list2.head) {
    return list1.head ? list1 : list2; // If one of the lists is empty, return the other one
  }

  let current1 = list1.head; // Current node in list 1
  let current2 = list2.head; // Current node in list 2
  let next1, next2; // Used to store next nodes

  while (current1 !== null && current2 !== null) {
    // Store next nodes
    next1 = current1.next;
    next2 = current2.next;

    // If next1 is null, it means end of of list1 reached and should append rest of list2
    if (next1 === null) {
      current1.next = current2;
      break;
    }

    // Insert current2 node right after current1 node in list1
    current1.next = current2;
    current2.next = next1;

    // Update pointers
    current1 = next1;
    current2 = next2;
  }

  // If list2 is longer, last node of list1 already points to remainder of list2
  return list1;
}

module.exports = {
  LinkedList,
  Node,
  zipLists
};
