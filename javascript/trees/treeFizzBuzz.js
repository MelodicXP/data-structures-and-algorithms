'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

function fizzBuzzTree(tree) {
  // If tree is null, there is no tree, return empty array
  if (!tree) {
    return [];
  }

  // Helper function to apply FizzBuzz logic
  const fizzBuzzValue = (value) => {
    if (value % 3 === 0 && value % 5 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    } else {
      return value.toString();
    }
  };

  // Create new root for new tree with FizzBuzz value
  let newRoot = new Node(fizzBuzzValue(tree.value));

  // Use a queue to keep track of nodes to visit (breadth-first traversal)
  let queue = [{
    original: tree,
    copy: newRoot
  }];

  while (queue.length > 0) {
    let { original, copy } = queue.shift();

    // For each child of node, create fizzbuzz logic node, and add to new tree.
    original.children.forEach(child => {
      // Create new node with fizz buzz logic
      let newChild = new Node(fizzBuzzValue(child.value));
      // Add new node to new tree
      copy.addChild(newChild);
      // Add child of original node and newChild of copy node to queue
      queue.push({ original: child, copy: newChild });
    });
  }
  return newRoot;
}

module.exports = {
  Node,
  fizzBuzzTree
};



