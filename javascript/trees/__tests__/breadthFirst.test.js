'use strict';

const { Node, breadthFirst } = require('../breadthFirst');

describe('Node Class', () => {
  test('should create a new Node instance with the correct value', () => {
    let node = new Node(10);
    expect(node.value).toBe(10);
    expect(node.children).toEqual([]);
  });
});

describe('breadthFirst Function', () => {
  test('should return an empty array if the tree is null', () => {
    expect(breadthFirst(null)).toEqual([]);
  });

  test('should return the correct breadth-first traversal for a single-node tree', () => {
    let root = new Node(1);
    expect(breadthFirst(root)).toEqual([1]);
  });

  test('should return the correct breadth-first traversal for a larger tree', () => {
    let root = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);
    let node6 = new Node(6);
    let node7 = new Node(7);

    root.children.push(node2, node3, node4);
    node2.children.push(node5, node6);
    node4.children.push(node7);

    expect(breadthFirst(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('should return the correct breadth-first traversal for a tree with missing nodes', () => {
    let root = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node7 = new Node(7);

    root.children.push(node2, node3);
    node2.children.push(node4);
    node3.children.push(node7);

    expect(breadthFirst(root)).toEqual([1, 2, 3, 4, 7]);
  });

  test('should handle a more complex tree structure', () => {
    let root = new Node(10);
    let node6 = new Node(6);
    let node15 = new Node(15);
    let node3 = new Node(3);
    let node8 = new Node(8);
    let node20 = new Node(20);

    root.children.push(node6, node15);
    node6.children.push(node3, node8);
    node15.children.push(node20);

    expect(breadthFirst(root)).toEqual([10, 6, 15, 3, 8, 20]);
  });
});
