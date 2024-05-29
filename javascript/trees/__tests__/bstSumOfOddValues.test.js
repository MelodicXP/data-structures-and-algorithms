const { sumOfOddValuesInBST } = require('../bstSumOfOddValues');
const { Node } = require('../Node');

describe('sumOfOddValuesInBST', () => {
  test('should return 0 for an empty tree', () => {
    const tree = null;
    expect(sumOfOddValuesInBST(tree)).toBe(0);
  });

  test('should return the value of a single node if it is odd', () => {
    const tree = new Node(3);
    expect(sumOfOddValuesInBST(tree)).toBe(3);
  });

  test('should return 0 for a single node if it is even', () => {
    const tree = new Node(2);
    expect(sumOfOddValuesInBST(tree)).toBe(0);
  });

  test('should sum all odd values in a simple tree', () => {
    const tree = new Node(10);
    tree.left = new Node(5);
    tree.right = new Node(15);
    expect(sumOfOddValuesInBST(tree)).toBe(20); // 5 + 15 = 20
  });

  test('should sum all odd values in a more complex tree', () => {
    const tree = new Node(10);
    tree.left = new Node(5);
    tree.right = new Node(15);
    tree.left.left = new Node(3);
    tree.left.right = new Node(7);
    tree.right.left = new Node(13);
    tree.right.right = new Node(17);
    expect(sumOfOddValuesInBST(tree)).toBe(60); // 5 + 15 + 3 + 7 + 13 + 17 = 60
  });

  test('should handle trees with all even values', () => {
    const tree = new Node(10);
    tree.left = new Node(2);
    tree.right = new Node(4);
    tree.left.left = new Node(6);
    tree.left.right = new Node(8);
    tree.right.left = new Node(12);
    tree.right.right = new Node(14);
    expect(sumOfOddValuesInBST(tree)).toBe(0); // No odd values
  });
});
