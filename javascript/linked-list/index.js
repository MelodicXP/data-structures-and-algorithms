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
}



module.exports = LinkedList;
