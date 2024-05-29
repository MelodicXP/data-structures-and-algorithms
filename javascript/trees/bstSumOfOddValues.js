'use strict';

function sumOfOddValuesInBST(tree) {
  let sumOfOddValues = 0;

  if (!tree) {
    return 0;
  }

  // Helper function to check if value is odd
  function isOdd(value) {
    return value % 2 !== 0;
  }

  // Queue to keep track of nodes to visit (breadth-first traversal)
  const queue = [];
  queue.push(tree);

  while (queue.length > 0) {
    const current = queue.shift();

    // Check if current node's value is odd and add to sum if true
    if (isOdd(current.value)) {
      sumOfOddValues += current.value;
    }

    // Add left and right children to queue if they exist
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return sumOfOddValues;
}

module.exports = { sumOfOddValuesInBST };
