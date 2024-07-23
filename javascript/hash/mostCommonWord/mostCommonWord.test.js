'use strict';

const { findMostCommonWord } = require('./mostCommonWord');

describe('findMostCommonWord', () => {
  test('should find the most common word in a simple string', () => {
    const text = 'the cat in the hat. The cat likes the hat. The hat is big.';
    expect(findMostCommonWord(text)).toBe('the');
  });

  test('should handle case insensitivity correctly', () => {
    const text = 'The quick brown fox jumps over the lazy dog. the quick brown fox jumps high.';
    expect(findMostCommonWord(text)).toBe('the');
  });

  test('should handle punctuation correctly', () => {
    const text = 'Hello, world! Hello again. World says hello.';
    expect(findMostCommonWord(text)).toBe('hello');
  });

  test('should handle an empty string', () => {
    const text = '';
    expect(findMostCommonWord(text)).toBe('');
  });

  test('should handle a string with no repeating words', () => {
    const text = 'Each word in this sentence is unique.';
    expect(findMostCommonWord(text)).toBe('each'); // The first word with highest count (1)
  });
});
