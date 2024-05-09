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
}

module.exports = {
  BinaryTree,
  Node
};
