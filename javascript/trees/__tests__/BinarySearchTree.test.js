'use strict';

const { BinarySearchTree } = require('../BinarySearchTree');

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('addNode correctly places new values IN ORDER', () => {
    // Initial tree with one element
    bst.addNode(10);
    expect(bst.root.value).toBe(10);

    // Add smaller value
    bst.addNode(5);
    expect(bst.root.left.value).toBe(5);

    // Add larger value
    bst.addNode(15);
    expect(bst.root.right.value).toBe(15);

    // Add another level
    bst.addNode(12);
    expect(bst.root.right.left.value).toBe(12);

    expect(bst.getInOrderResults()).toEqual([5, 10, 12, 15]);
  });

  test('contains returns true for existing values', () => {
    bst.addNode(10);
    bst.addNode(5);
    bst.addNode(15);
    bst.addNode(12);
    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(12)).toBe(true);
  });

  test('contains returns false for non-existing values', () => {
    bst.addNode(10);
    bst.addNode(5);
    bst.addNode(15);
    expect(bst.contains(1)).toBe(false);
    expect(bst.contains(6)).toBe(false);
    expect(bst.contains(20)).toBe(false);
  });

  test('can successfully add a left child and right child properly to a node', () => {
    bst.addNode(10); // Root node
    bst.addNode(5); // Left child of root
    bst.addNode(15); // Right child of root

    // Check left and right children
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);

    // Further validation by adding children to the left and right nodes
    bst.addNode(3); // Left child of left node
    bst.addNode(7); // Right child of left node
    bst.addNode(12); // Left child of right node
    bst.addNode(18); // Right child of right node

    expect(bst.root.left.left.value).toBe(3);
    expect(bst.root.left.right.value).toBe(7);
    expect(bst.root.right.left.value).toBe(12);
    expect(bst.root.right.right.value).toBe(18);
  });
});

