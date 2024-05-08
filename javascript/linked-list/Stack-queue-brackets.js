'use strict';

// const Queue = require('./Queue');
const { Stack } = require('./Stack');

const validateBrackets = (string) => {
  let stack = new Stack();
  let bracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let char of string) {
    // Check if the character is an opening bracket
    if(char in bracketPairs) {
      stack.push(char); // Push opening bracket onto stack
    } else if (Object.values(bracketPairs).includes(char)) { // Check if it's a closing bracket
      if (stack.isEmpty() || bracketPairs[stack.pop()] !== char) {
        // If stack is empty or brackets do not match
        return false;
      }
    }
  }

  // If stack is empty, all opening brackets have been matched with a closing bracket returns true
  return stack.isEmpty();
};

module.exports = {
  validateBrackets,
};

