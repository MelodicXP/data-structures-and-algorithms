'use strict';

let { Node } = require('./Node');

// Create a Binary Tree class
class BinaryTree {
  constructor() {
    this.node = new Node();
    this.root = null;
  }

  // Method for each of the depth first traversals:
  getPreOrderResults () {
    let preOrderResults = [];

    // Recursive helper function
    const traverseTree = (node) => {
      preOrderResults.push(node.value); // Do the thing FIRST when its PRE-ORDER

      // Left and right cases
      if(node.left) {
        traverseTree(node.left);
      }
      if(node.right) {
        traverseTree(node.right);
      }
    };

    traverseTree(this.root);
    return preOrderResults;
  }

  getInOrderResults() {
    let inOrderResults = [];

    const traverseTree = (node) => {
      // recursive left case
      if (node.left) traverseTree(node.left);

      // Do the thing in between left traversals and right traversals
      inOrderResults.push(node.value);

      // recursive right case
      if (node.right) traverseTree(node.right);
    };

    traverseTree(this.root);
    return inOrderResults;
  }


  getPostOrderResults() {
    let postOrderResults = [];

    const traverseTree = (node) => {
      // Left and right cases
      if(node.left) {
        traverseTree(node.left);
      }
      if(node.right) {
        traverseTree(node.right);
      }

      postOrderResults.push(node.value); // Do the thing LAST when its POST-ORDER
    };

    traverseTree(this.root);
    return postOrderResults;
  }

  // Find the maximum value in a binary tree
  findMaxValue() {
    let maxValue = -Infinity;

    const traverseTree = (node) => {
      if (node.value > maxValue) {
        maxValue = node.value;
      }

      if (node.left) {
        traverseTree(node.left);
      }
      if (node.right) {
        traverseTree(node.right);
      }
    };

    // Start recursive function from root
    if (this.root) {
      traverseTree(this.root);
    }

    return maxValue;
  }

  // Method for breadth first traversal
  breadthFirst() {

    // If root is null, there is no tree, return empty array
    if(this.root === null) {
      return [];
    }

    let queueOfNodesToVisit = [this.root]; // Initialize queue with root node
    let resultsOfBreadthTraversal = []; // Store results of breadth first traversal

    while (queueOfNodesToVisit.length > 0 ) {
      let currentNode = queueOfNodesToVisit.shift(); // Remove node at front of queue (dequeue)
      resultsOfBreadthTraversal.push(currentNode.value); // Add value of node to results list

      // Add to queue children of current node if they exist
      if (currentNode.left) {
        queueOfNodesToVisit.push(currentNode.left);
      }
      if (currentNode.right) {
        queueOfNodesToVisit.push(currentNode.right);
      }
    }

    return resultsOfBreadthTraversal;
  }
}

module.exports = {
  BinaryTree,
  Node
};

