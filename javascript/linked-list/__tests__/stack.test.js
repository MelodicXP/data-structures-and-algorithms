'use strict';

const { Stack } = require('../Stack');

describe('Stack functionality', () => {
  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('first');
    expect(stack.peek()).toBe('first');
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push('first');
    stack.push('second');
    expect(stack.peek()).toBe('second');
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push('first');
    expect(stack.pop()).toBe('first');
    expect(stack.isEmpty()).toBe(true);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('first');
    stack.push('second');
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push('first');
    stack.push('second');
    expect(stack.peek()).toBe('second');
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow('Stack is empty');
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
});
