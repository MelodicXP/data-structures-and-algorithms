'use strict';

const { Queue } = require('../Queue');

describe('Queue functionality', () => {
  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('first');
    expect(queue.peek()).toBe('first');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.peek()).toBe('first');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.dequeue()).toBe('first');
    expect(queue.peek()).toBe('second');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue('first');
    expect(queue.peek()).toBe('first');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow('Queue is empty');
    expect(() => queue.peek()).toThrow('Queue is empty');
  });
});
