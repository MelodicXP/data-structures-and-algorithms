'use strict';

const { HashTable } = require('../hash/hashTable/hashTable');

const addTreeToHashMap = (tree) => {
  // Intialize empty hash table
  let hashTable = new HashTable();

  // Function to traverse and add nodes to hash table
  const traverseAndAdd = (node) => {
    // Base case, if no node, return
    if (!node) {
      return;
    }

    // Add node to hashTable
    hashTable.set(node.value, true); // Use 'true' as a placeholder value

    // Recursively traverse left side of tree
    traverseAndAdd(node.left);
    // Recursively traverse right side of tree
    traverseAndAdd(node.right);
  };

  // Invoke traversal to add nodes to hashmap and return hashTable
  traverseAndAdd(tree.root);
  return hashTable;
};

const findTreeIntersection = (tree1, tree2) => {
  // Initialize an empty array to store duplicate values
  let duplicateValues = [];

  // If either tree is empty, return the empty array
  if (!tree1.root || !tree2.root ) {
    return duplicateValues;
  }

  // Create a hash table from the first tree
  let hashTable = addTreeToHashMap(tree1);

  // Initialize a stack with the root of the second tree
  let stack = [tree2.root];

  // Traverse the second tree using the stack
  while(stack.length > 0) {
    let currentNode = stack.pop();

    // Check if the current node's value is in the hash table
    if (hashTable.has(currentNode.value)) {
      duplicateValues.push(currentNode.value);
    }

    // Push the left and right children to the stack if they exist
    if(currentNode.left){
      stack.push(currentNode.left);
    }
    if(currentNode.right) {
      stack.push(currentNode.right);
    }
  }
  return duplicateValues;
};

// let tree;
// tree = new BinaryTree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(1);
// tree.root.left.right = new Node(7);
// tree.root.right.right = new Node(20);

// let tree2;
// tree2 = new BinaryTree();
// tree2.root = new Node(11);
// tree2.root.left = new Node(5);
// tree2.root.right = new Node(16);
// tree2.root.left.left = new Node(2);
// tree2.root.left.right = new Node(8);
// tree2.root.right.right = new Node(11);

// const testRun = addTreeToHashMap(tree);
// console.log('Test Run: ', testRun.buckets);

// const duplicateValues = findTreeIntersection(tree, tree2);
// console.log('Duplicate Values: ', duplicateValues);

module.exports = { addTreeToHashMap, findTreeIntersection };




