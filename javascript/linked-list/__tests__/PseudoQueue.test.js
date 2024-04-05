'use strict';

const { QueueUsingStacks } = require('../PseudoQueue');

describe('QueueUsingStacks functionality', () => {
  it('Can successfully enqueue onto a pseudo queue', () => {
    const pq = new QueueUsingStacks();
    pq.enqueue('first');
    expect(pq.dequeue()).toBe('first');
  });

  it('Can successfully enqueue multiple values onto a pseudo queue', () => {
    const pq = new QueueUsingStacks();
    pq.enqueue('first');
    pq.enqueue('second');
    pq.enqueue('third');
    expect(pq.dequeue()).toBe('first');
    expect(pq.dequeue()).toBe('second');
    expect(pq.dequeue()).toBe('third');
  });

  it('Can successfully dequeue from the pseudo queue', () => {
    const pq = new QueueUsingStacks();
    pq.enqueue('first');
    expect(pq.dequeue()).toBe('first');
    // Trying to dequeue again should throw an error or return undefined based on implementation
    expect(() => pq.dequeue()).toThrow('Stack is empty'); // or whatever error message you've implemented
  });

  it('Follows first-in, first-out principle', () => {
    const pq = new QueueUsingStacks();
    pq.enqueue('first');
    pq.enqueue('second');
    expect(pq.dequeue()).toBe('first');
    expect(pq.dequeue()).toBe('second');
  });

  it('Can successfully instantiate an empty pseudo queue', () => {
    const pq = new QueueUsingStacks();
    expect(() => pq.dequeue()).toThrow('Stack is empty'); // Assuming throwing error on empty dequeue
  });

  it('Can handle interleaved enqueue and dequeue operations', () => {
    const pq = new QueueUsingStacks();
    pq.enqueue('first');
    pq.enqueue('second');
    expect(pq.dequeue()).toBe('first');
    pq.enqueue('third');
    expect(pq.dequeue()).toBe('second');
    expect(pq.dequeue()).toBe('third');
  });

  it('Dequeueing from an empty pseudo queue raises exception', () => {
    const pq = new QueueUsingStacks();
    // Ensure that attempting to dequeue from an empty queue throws an exception
    expect(() => pq.dequeue()).toThrow('Stack is empty'); // Adjust based on your error handling
  });
});
