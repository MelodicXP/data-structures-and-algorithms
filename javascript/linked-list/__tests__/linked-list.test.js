'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should instantiate an empty linked list', () => {
    const linked = new LinkedList();
    expect(linked.head).toBeNull();
  });

  it('it should insert at beginning', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    expect(linked.head.value).toEqual('apple');
    expect(linked.head.next).toBeNull();
  });

  it('it should insert at beginning of populated list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');
    expect(linked.head.value).toEqual('banana');
    expect(linked.head.next.value).toEqual('apple');
    expect(linked.head.next.next).toBeNull();
  });

  it('should display as string properly', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');
    const linkedString = linked.toString();
    expect(linkedString).toEqual('{ banana } -> { apple } -> NULL');
  });

  it('should return true for a value that exists within the list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');
    expect(linked.includes('banana')).toBeTruthy();
  });

  it('should successfully add a node to the end of the linked list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana'); // 'insert' adds to beginning
    linked.append('carrot'); // 'append' adds to end of list

    let current = linked.head;
    while (current.next) {
      current = current.next; // Traverse list
    }
    expect(current.value).toEqual('carrot');
  });

  it('should successfully add multiple nodes to end of linked list', () => {
    const linked = new LinkedList();
    linked.append('apple');
    linked.append('banana');
    linked.append('carrot');

    // Verify order and prescence of nodes added
    let current = linked.head;
    let values = [];
    while(current) {
      values.push(current.value); // Collect node values
      current = current.next; // Traverse list
    }
    expect(values).toEqual(['apple', 'banana', 'carrot']);
  });

  it('should successfully insert node before a node located in middle of linked list', () => {
    const linked = new LinkedList();
    linked.append('apple');
    linked.append('carrot'); // This will become middle node
    linked.append('banana');

    // Insert 'orange' before 'carrot' (the middle node)
    linked.insertBefore('carrot', 'orange');

    // Traverse list to verify order of nodes
    let current = linked.head;
    let values = [];
    while(current) {
      values.push(current.value); // Collect node values
      current = current.next; // Traverse list
    }
    expect(values).toEqual(['apple', 'orange', 'carrot', 'banana']);
  });

  it('should successfully insert a node before the first node of a linked list', () => {
    const linked = new LinkedList();
    linked.append('apple');
    linked.append('carrot');
    linked.append('banana'); // 'append' adds to end of list

    // Insert 'orange' before 'apple' (the middle node)
    linked.insertBefore('apple', 'orange');

    // Verify 'orange' is now first node 'head'
    expect(linked.head.value).toEqual('orange');

    // Check if 'orange' is followed by to apple to ensure order maintained
    let secondNode = linked.head.next;
    expect(secondNode.value).toEqual('apple');
  });

  it('should successfully insert a node after after a node in the middle of the linked list', () => {
    const linked = new LinkedList();
    linked.append('apple');
    linked.append('carrot'); // middle node
    linked.append('banana'); // 'append' adds to end of list

    // Insert 'orange' before 'carrot' (the middle node)
    linked.insertAfter('carrot', 'orange');

    // Verify order of nodes
    let current = linked.head;
    let values = [];
    while (current) { // Traverse list to last node
      values.push(current.value); // Collect node values into an array
      current = current.next;
    }

    // Expect values to show 'orange' inserted after 'carrot'
    expect(values).toEqual(['apple', 'carrot', 'orange', 'banana']);
  });

  it('should successfully insert a node after the last node of the linked list', () => {
    const linked = new LinkedList();
    linked.append('apple');
    linked.append('banana'); // Currently, the last node

    // Insert 'carrot' after 'banana' (the last node at this moment)
    linked.insertAfter('banana', 'carrot');

    // Traverse list
    let current = linked.head;
    while (current.next) { // Traverse list to last node
      current = current.next;
    }

    // Now, 'current' should be 'carrot', the newly added node
    expect(current.value).toEqual('carrot');

    // Ensure 'carrot' is the last node by checking current.next is null
    expect(current.next).toBeNull();
  });

});

