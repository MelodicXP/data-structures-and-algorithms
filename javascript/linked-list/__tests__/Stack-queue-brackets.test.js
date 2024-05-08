'use strict';

const { validateBrackets } = require('../Stack-queue-brackets');

describe('Bracket Validation Functionality', () => {
  it('correctly validates a string with matched brackets', () => {
    const validString = '{[()]}';
    expect(validateBrackets(validString)).toBe(true);
  });

  it('returns false for a string with unmatched opening brackets', () => {
    const invalidString = '{[(';
    expect(validateBrackets(invalidString)).toBe(false);
  });

  it('returns false for a string with unmatched closing brackets', () => {
    const invalidString = '{[()]}]';
    expect(validateBrackets(invalidString)).toBe(false);
  });

  it('returns false for a string with incorrect nesting of brackets', () => {
    const invalidString = '{[(])}';
    expect(validateBrackets(invalidString)).toBe(false);
  });

  it('returns true for an empty string', () => {
    const emptyString = '';
    expect(validateBrackets(emptyString)).toBe(true);
  });

  it('returns true for a string without any brackets', () => {
    const noBracketString = 'Hello, world!';
    expect(validateBrackets(noBracketString)).toBe(true);
  });
});
