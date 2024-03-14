'use strict';

// Require our linked list implementation
const { LinkedList, zipLists } = require('../LinkedList');

describe('zipLists function', () => {

  test('zips two lists of equal length', () => {
    // Create two linked lists
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    // Populate list
    list1.insert(1);
    list1.append(3);
    list1.append(5);

    list2.insert(2);
    list2.append(4);
    list2.append(6);

    // Zip lists together
    const zippedList = zipLists(list1, list2);

    // Expected result
    expect(zippedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

  test('handles when first list is longer', () => {
    // Create two linked lists
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    // Populate lists
    list1.insert(1);
    list1.append(3);
    list1.append(5);
    list1.append(7);

    list2.insert(2);
    list2.append(4);
    list2.append(6);

    // Zip lists together
    const zippedList = zipLists(list1, list2);

    // Expected result
    expect(zippedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> NULL');
  });

  test('handles when second list is longer', () => {
    // Create two linked lists
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    // Populate lists
    list1.insert(1);
    list1.append(3);

    list2.insert(2);
    list2.append(4);
    list2.append(6);
    list2.append(8);

    // Zip lists together
    const zippedList = zipLists(list1, list2);

    // Expected result
    expect(zippedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 6 } -> { 8 } -> NULL');
  });

  test('handles when one list is empty', () => {
    // Create two linked lists
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    // Populate one list only
    list2.append(2);
    list2.append(4);

    // Zip lists together
    const zippedList = zipLists(list1, list2);

    // Expected result
    expect(zippedList.toString()).toEqual('{ 2 } -> { 4 } -> NULL');
  });

});
