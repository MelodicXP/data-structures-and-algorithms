'use strict';

const { BinaryTree, Node } = require('../BinaryTree');

describe('BinaryTree breadthFirst', () => {
  test('should return an empty array if the tree is empty', () => {
    let tree = new BinaryTree();
    expect(tree.breadthFirst()).toEqual([]);
  });

  test('should return the correct breadth-first traversal for a single-node tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    expect(tree.breadthFirst()).toEqual([1]);
  });

  test('should return the correct breadth-first traversal for a larger tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);
    expect(tree.breadthFirst()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('should return the correct breadth-first traversal for a tree with missing nodes', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.right.right = new Node(7);
    expect(tree.breadthFirst()).toEqual([1, 2, 3, 4, 7]);
  });

  test('should handle a more complex tree structure', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(6);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(20);
    expect(tree.breadthFirst()).toEqual([10, 6, 15, 3, 8, 20]);
  });
});
