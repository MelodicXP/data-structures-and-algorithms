'use strict';

class LinkedList {
  constructor() {
    //set head as null
    this.head = null;
  }

  // Assign/insert given value to new node
  insert(value) {
    // when new node added pass in value, and assign head to the newly added node
    this.head = new Node(value, this.head);
    // or
    // const oldHead = this.head;
    // this.head = new Node(value);
    // this.head.next = oldHead;
  }

  // Convert linked list to string
  toString() {
    let current = this.head; // Start from head of list
    let text = '';
    while(current) { // Go through linked list, while current !NULL
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
}

// Create node
class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
