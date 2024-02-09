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
});

