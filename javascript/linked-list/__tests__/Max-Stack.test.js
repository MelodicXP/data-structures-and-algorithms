'use strict';

const { Stack } = require('../Stack');
describe('Max Stack Functionality', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should correctly return the maximum value after multiple pushes', () => {
    stack.push(1);
    stack.push(3);
    stack.push(2);
    expect(stack.getMax()).toBe(3);
  });

  it('should correctly update the maximum value after the current max is popped', () => {
    stack.push(3);
    stack.push(5);
    stack.push(4);
    expect(stack.getMax()).toBe(5);
    stack.pop(); // Pops 4
    expect(stack.getMax()).toBe(5);
    stack.pop(); // Pops 5, the current max
    expect(stack.getMax()).toBe(3);
  });

  it('should handle a single element', () => {
    stack.push(7);
    expect(stack.getMax()).toBe(7);
  });

  it('should throw an error if getMax is called on an empty stack', () => {
    expect(() => stack.getMax()).toThrow('Stack is empty');
  });

  it('should correctly track the maximum value through various operations', () => {
    stack.push(6);
    stack.push(8);
    stack.push(3);
    stack.push(10);
    expect(stack.getMax()).toBe(10);
    stack.pop(); // Pops 10
    stack.pop(); // Pops 3
    expect(stack.getMax()).toBe(8);
    stack.push(9);
    expect(stack.getMax()).toBe(9);
  });
});
