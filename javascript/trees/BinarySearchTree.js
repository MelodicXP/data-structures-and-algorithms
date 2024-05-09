'use strict';

const { BinaryTree, Node } = require('./BinaryTree');

class BinarySearchTree extends BinaryTree {
  constructor() {
    super(); // call constructor of parent class, Binary Tree
  }

  addNode(value) {
    const newNode = new Node(value); // Create a new node with the value

    // If the tree is empty, set the root to the new node
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Recursive helper function
      const insertNode = (node, newNode) => {
        if (newNode.value < node.value) { // Go left if new value is less than node value
          if (node.left === null) {
            node.left = newNode; // Set left child if it's null
          } else {
            insertNode(node.left, newNode); // Recur on the left child
          }
        } else if (newNode.value > node.value) { // Go right if the new value is greater than the node value
          if (node.right === null) {
            node.right = newNode; // Set right child if it's null
          } else {
            insertNode(node.right, newNode); // Recur on the right child
          }
        }
      };
      insertNode(this.root, newNode); // Start the recursion from the root
    }
  }

  contains(value) {
    // Recursive helper function
    const searchTree = (node, value) => {
      if (node === null) {
        return false; // Base case: reached a leaf without finding the value
      }
      if (value < node.value) {
        return searchTree(node.left, value); // Recur on the left subtree
      } else if (value > node.value) {
        return searchTree(node.right, value); // Recur on the right subtree
      } else {
        return true; // Value matches the node's value
      }
    };
    return searchTree(this.root, value); // Start the recursion from the root
  }
}

module.exports = { BinarySearchTree };
