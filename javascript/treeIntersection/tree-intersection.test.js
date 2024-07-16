'use strict';

const { BinaryTree, Node } = require('../trees/BinaryTree');
const { addTreeToHashMap, findTreeIntersection } = require('./tree-intersection');

// Unit tests for addTreeToHashMap function
describe('addTreeToHashMap', () => {
  test('should add all nodes of the tree to the hash table', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(7);
    tree.root.right.right = new Node(20);

    const hashTable = addTreeToHashMap(tree);

    expect(hashTable.has(10)).toBe(true);
    expect(hashTable.has(5)).toBe(true);
    expect(hashTable.has(15)).toBe(true);
    expect(hashTable.has(1)).toBe(true);
    expect(hashTable.has(7)).toBe(true);
    expect(hashTable.has(20)).toBe(true);
  });

  test('should handle an empty tree', () => {
    let tree = new BinaryTree();

    const hashTable = addTreeToHashMap(tree);

    expect(hashTable.keys().length).toBe(0);
  });

  test('should not contain values not in the tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);

    const hashTable = addTreeToHashMap(tree);

    expect(hashTable.has(3)).toBe(false);
    expect(hashTable.has(8)).toBe(false);
  });
});

// Unit tests for findTreeIntersection function
describe('findTreeIntersection', () => {
  test('should find duplicate values in both trees', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node(10);
    tree1.root.left = new Node(5);
    tree1.root.right = new Node(15);
    tree1.root.left.left = new Node(1);
    tree1.root.left.right = new Node(7);
    tree1.root.right.right = new Node(20);

    let tree2 = new BinaryTree();
    tree2.root = new Node(10);
    tree2.root.left = new Node(5);
    tree2.root.right = new Node(16);
    tree2.root.left.left = new Node(2);
    tree2.root.left.right = new Node(7);
    tree2.root.right.right = new Node(20);

    const duplicates = findTreeIntersection(tree1, tree2);

    expect(duplicates).toEqual(expect.arrayContaining([10, 5, 7, 20]));
  });

  test('should return an empty array if there are no duplicate values', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node(1);
    tree1.root.left = new Node(2);
    tree1.root.right = new Node(3);

    let tree2 = new BinaryTree();
    tree2.root = new Node(4);
    tree2.root.left = new Node(5);
    tree2.root.right = new Node(6);

    const duplicates = findTreeIntersection(tree1, tree2);

    expect(duplicates.length).toBe(0);
  });

  test('should handle cases where one or both trees are empty', () => {
    let tree1 = new BinaryTree();
    let tree2 = new BinaryTree();

    let duplicates = findTreeIntersection(tree1, tree2);
    expect(duplicates.length).toBe(0);

    tree1.root = new Node(1);
    duplicates = findTreeIntersection(tree1, tree2);
    expect(duplicates.length).toBe(0);

    tree2.root = new Node(1);
    duplicates = findTreeIntersection(tree1, tree2);
    expect(duplicates).toEqual([1]);
  });
});
