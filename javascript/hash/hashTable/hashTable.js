'use strict';

class HashTable {
  constructor(size = 1024) {
    this.size = size;
    // Create an array of specified size (default 1024)
    // Each element of array is initialized as an empty array (bucket)
    this.buckets = Array(size).fill(null).map(() => []);
  }

  hash(key) {
    let hash = 0;
    // Iterate through each character in the key
    for (let i = 0; i < key.length; i++) {
      // Get the character code of each character and add it to the hash variable
      hash += key.charCodeAt(i);
    }
    // Multiply resulting sum by a prime number (599) to reduce collisions
    hash *= 599;
    // Use modulo operation to ensure the hash fits within the size of the buckets array
    // This returns an index within the range of the array
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if the key already exists in the bucket
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        // Update the value if key is found
        bucket[i].value = value;
        return;
      }
    }

    // If key is not found, add the new key-value pair
    bucket.push({ key, value });
  }

  get(key) {
    const index = this.hash(key);
    // Iterate over each element in bucket at the computed index
    for (let i = 0; i < this.buckets[index].length; i++) {
      // Check if key in the key-value pair matches the given key
      if (this.buckets[index][i].key === key) {
        // Return the corresponding value if match found
        return this.buckets[index][i].value;
      }
    }
    // Return null if the key is not found in bucket
    return null;
  }

  has(key) {
    const index = this.hash(key);
    // Iterate over each element in bucket at the computed index
    for (let i = 0; i < this.buckets[index].length; i++) {
      // Check if key in the key-value pair matches the given key
      if (this.buckets[index][i].key === key) {
        // Return true if match found
        return true;
      }
    }
    // Return false if key not found in bucket
    return false;
  }

  keys() {
    const keysArray = [];
    // Iterate over each bucket in the buckets array
    for (let i = 0; i < this.buckets.length; i++) {
      // Iterate over each key-value pair in the current bucket
      for (let j = 0; j < this.buckets[i].length; j++) {
        // Push the key from the key-value pair into the keysArray
        keysArray.push(this.buckets[i][j].key);
      }
    }
    return keysArray;
  }

}

// const hashTable = new HashTable();

// // Adding key-value pairs
// hashTable.set('Greenwood', '98103');
// hashTable.set('Downtown', '98101');
// hashTable.set('Alki Beach', '98116');

// // Retrieving values
// console.log(hashTable.get('Greenwood')); // Output: 98103
// console.log(hashTable.get('Downtown')); // Output: 98101
// console.log(hashTable.get('Alki Beach')); // Output: 98116

// // Checking if a key exists
// console.log(hashTable.has('Greenwood')); // Output: true
// console.log(hashTable.has('Unknown')); // Output: false

// // Getting all keys
// console.log(hashTable.keys()); // Output: ["Greenwood", "Downtown", "Alki Beach"]

module.exports = { HashTable };

