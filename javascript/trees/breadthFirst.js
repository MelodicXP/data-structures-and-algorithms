'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function breadthFirst(tree) {
  // If tree is null, there is no tree, return empty array
  if (tree === null) {
    return [];
  }

  let queueOfNodesToVisit = []; // Queue to keep track of nodes to visit
  let resultsOfBreadthTraversal = []; // Store results of breadth first traversal

  if (tree) {
    queueOfNodesToVisit.push(tree);
  }

  while (queueOfNodesToVisit.length > 0) {
    let currentNode = queueOfNodesToVisit.shift(); // Remove node at front of queue (dequeue)
    resultsOfBreadthTraversal.push(currentNode.value); // Add of value dequeued node to results list

    // Add all children of current node to queue
    currentNode.children.forEach(child => {
      queueOfNodesToVisit.push(child);
    });
  }

  return resultsOfBreadthTraversal;
}

module.exports = {
  Node,
  breadthFirst
};
