'use strict';
const { HashTable } = require('../hashTable/hashTable');

const findMostCommonWord = (string) => {
  let highestCount = 0;
  let mostCommonWord = '';

  // Create empty hashTable
  let hashTable = new HashTable();

  // Split text into words + lower case + remove punctation
  const words = string.toLowerCase().replace(/[^\w\s]/g, '').split(' ');

  for (const word of words) {
    if (word === '') continue; // Skip empty strings resulting from multiple spaces

    // Check if word exists in hash
    if (hashTable.has(word)) {
      // If exists, increase count of word
      const currentCount = hashTable.get(word) + 1;
      hashTable.set(word, currentCount);

      // Check if this is the highest count so far
      if (currentCount > highestCount) {
        highestCount = currentCount;
        mostCommonWord = word;
      }
    } else {
      // If doesn't exist, add word with count of 1
      hashTable.set(word, 1);

      // Check if this is the highest count so far
      if (highestCount === 0) {
        highestCount = 1;
        mostCommonWord = word;
      }
    }
  }

  return mostCommonWord;
};

module.exports = { findMostCommonWord };

// Example usage
// console.log(findMostCommonWord('In a galaxy far far away'));
