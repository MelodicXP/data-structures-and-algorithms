'use strict';

let {LinkedList, zipLists} = require('./LinkedList');

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

// Display the zipped list
console.log('Zipped List:', zippedList.toString());
