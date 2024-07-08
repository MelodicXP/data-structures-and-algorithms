'use strict';

const { repeatedWord } = require('./hashMapRepeatedWord');

describe('repeatedWord', () => {
  test('should return the first repeated word in the text', () => {
    const text = 'Once upon a time, there was a brave princess who... upon meeting the dragon, she was very brave.';
    expect(repeatedWord(text)).toBe('a');
  });

  test('should return null if there are no repeated words', () => {
    const text = 'No repeated word here';
    expect(repeatedWord(text)).toBe(null);
  });

  test('should handle case insensitivity', () => {
    const text = 'Upon meeting the dragon named Dragon, she was brave.';
    expect(repeatedWord(text)).toBe('dragon');
  });

  test('should handle punctuation correctly', () => {
    const text = 'Hello, world! Hello again.';
    expect(repeatedWord(text)).toBe('hello');
  });

  test('should return the first repeated word when there are multiple repetitions', () => {
    const text = 'It was the best of times, it was the worst of times.';
    expect(repeatedWord(text)).toBe('it');
  });
});






