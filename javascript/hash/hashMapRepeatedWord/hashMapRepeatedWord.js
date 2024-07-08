'use strict';

const { HashTable } = require('../hashTable/hashTable');

let repeatedWord = (text) => {
  // Create empty hashtable
  let hashTable = new HashTable();

  // Split text into words + lower case + remove punctation
  const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(' ');


  for (const word of words) {
    // check if word exists in hash
    if(hashTable.has(word)) {
      return word; // if exists return word as it is first to repeat
    }
    // if doesn't exists add word
    hashTable.set(word);
  }
  // If no repeat word found, return null
  return null;

};

module.exports = { repeatedWord };






