'use strict';

const { BinaryTree, Node } = require('../BinaryTree');

describe('BinaryTree', () => {
  let tree;

  test('Can successfully instantiate an empty tree', () => {
    tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    tree = new BinaryTree();
    tree.root = new Node(10);
    expect(tree.root.value).toBe(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  describe('Traversals on a populated tree', () => {
    beforeEach(() => {
      tree = new BinaryTree();
      tree.root = new Node(10);
      tree.root.left = new Node(5);
      tree.root.right = new Node(15);
      tree.root.left.left = new Node(1);
      tree.root.left.right = new Node(7);
      tree.root.right.right = new Node(20);
    });

    test('getPreOrderResults returns correct traversal', () => {
      const expectedPreOrder = [10, 5, 1, 7, 15, 20];
      expect(tree.getPreOrderResults()).toEqual(expectedPreOrder);
    });

    test('getInOrderResults returns correct traversal', () => {
      const expectedInOrder = [1, 5, 7, 10, 15, 20];
      expect(tree.getInOrderResults()).toEqual(expectedInOrder);
    });

    test('getPostOrderResults returns correct traversal', () => {
      const expectedPostOrder = [1, 7, 5, 20, 15, 10];
      expect(tree.getPostOrderResults()).toEqual(expectedPostOrder);
    });
  });
});
