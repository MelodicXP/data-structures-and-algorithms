'use strict';

const { Stack } = require('./Stack');

const stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.getMax()); // Should print 5

stack.push(2);
console.log(stack.getMax()); // Should still print 5

stack.pop();
console.log(stack.getMax()); // Should print 5

stack.pop();
console.log(stack.getMax()); // Should print 3
