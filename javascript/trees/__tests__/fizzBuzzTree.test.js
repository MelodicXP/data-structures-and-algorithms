const { Node, fizzBuzzTree } = require('../treeFizzBuzz');

describe('fizzBuzzTree', () => {
  test('should return an empty array if the input tree is null', () => {
    expect(fizzBuzzTree(null)).toEqual([]);
  });

  test('should handle a single-node tree', () => {
    let root = new Node(1);
    let newTree = fizzBuzzTree(root);
    expect(newTree.value).toBe('1');
    expect(newTree.children).toEqual([]);
  });

  test('should apply FizzBuzz logic correctly', () => {
    let root = new Node(15);
    let node3 = new Node(3);
    let node5 = new Node(5);
    let node7 = new Node(7);
    root.addChild(node3);
    root.addChild(node5);
    root.addChild(node7);

    let newTree = fizzBuzzTree(root);

    expect(newTree.value).toBe('FizzBuzz');
    expect(newTree.children[0].value).toBe('Fizz');
    expect(newTree.children[1].value).toBe('Buzz');
    expect(newTree.children[2].value).toBe('7');
  });

  test('should maintain tree structure', () => {
    let root = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);
    let node6 = new Node(6);
    let node15 = new Node(15);

    root.addChild(node2);
    root.addChild(node3);
    root.addChild(node4);
    node2.addChild(node5);
    node3.addChild(node6);
    node4.addChild(node15);

    let newTree = fizzBuzzTree(root);

    expect(newTree.value).toBe('1');
    expect(newTree.children.length).toBe(3);
    expect(newTree.children[0].value).toBe('2');
    expect(newTree.children[1].value).toBe('Fizz');
    expect(newTree.children[2].value).toBe('4');
    expect(newTree.children[0].children[0].value).toBe('Buzz');
    expect(newTree.children[1].children[0].value).toBe('Fizz');
    expect(newTree.children[2].children[0].value).toBe('FizzBuzz');
  });
});
