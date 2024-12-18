'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named updateAnimal that takes in array of animals (strings) and some callback function.

This function should first create a new array. Then iterate over the input array and modify each value based on the callback function provided.

Push each updated animal string into the new array. Return the new array.

HINT: Look at the tests to see how the callback functions are used.

------------------------------------------------------------------------------------------------ */

const upper = (str) => str.toUpperCase();
// function upper(str) {
//   return str.toUpperCase();
// }

const lower = (str) => str.toLowerCase();
// function lower(str) {
//   return str.toLowerCase();
// }

const updateAnimal = (arr, callback) =>
  arr.map((string) => {
    return callback(string);
  });


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function called sortNames that takes an array of names and sorts them alphabetically. Capital letters should come before lowercase letters.

For example: 'Cat' would come before 'apple'
------------------------------------------------------------------------------------------------ */

const sortNames = (arr) => arr.sort();

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function called sortNumbers that takes an array of numbers and sorts them from smallest to largest.

HINT: Beware... JS default is "Lexical" ordering.
------------------------------------------------------------------------------------------------ */

const sortNumbers = (arr) => arr.sort((a, b) => a - b);
//     {

//     if ( num1 < num2) {
//       return true; // num1 comes before false

//     } else if (num1 > num2) {
//       return false; // b comes before a

//     } else {
//       return 0; // leave as is
//     }

//   });

//   return arr;
// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, largest to smallest.

HINT: Do it with a custom sort callback, not with using `.reverse()`. ;)
------------------------------------------------------------------------------------------------ */

const sortBackwards = (arr) => arr.sort((a, b) => b - a);
//   {

//   arr.sort( (a, b) => {

//     if ( a < b) {
//       return 1; // b come before a

//     } else if (a > b) {
//       return -1; // a comes before b

//     } else {
//       return 0; // leave as is

//     }

//   });

//   return arr;

// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.

In this alphabetization, capital letters come before lower case letters.

For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.
------------------------------------------------------------------------------------------------ */

const alphabetize = (arr) => arr.sort();

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named sortByPrice that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];
------------------------------------------------------------------------------------------------ */

const sortByPrice = (arr) =>
  arr.sort((a, b) => {
    return a.price - b.price;
  });

//   {

//   arr.sort ( (a, b) => {

//     if ( a.price < b.price) {
//       return -1; // a comes before b

//     } else if (a.price > b.price) {
//       return 1; // b comes before a

//     } else {
//       return 0; // leave as is

//     }

//   });

//   return arr;
// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named alphabetizeBetter that takes in an array of strings and returns the same array, with the strings sorted alphabetically. Capitalization should not change the sort order of two strings.

For example, ['Alphabet', 'alphabet', 'carrot', 'Zebra'] is correctly sorted, and so is ['alphabet', 'Alphabet', 'carrot', 'Zebra'].
------------------------------------------------------------------------------------------------ */

const alphabetizeBetter = (arr) =>
  arr.sort((a, b) => {
    const upperA = a.toUpperCase();
    const upperB = b.toUpperCase();
    return upperA.localeCompare(upperB); // returns -1, 0, 1
  });
//   {

//   arr.sort ( (a, b) => {

//     // Lower case both a and b to compare regardless of capitlizations
//     let aLowerCase = a.toLowerCase();
//     let bLowerCase = b.toLowerCase();

//     if ( aLowerCase < bLowerCase) {
//       return -1; // a comes before b

//     } else if (aLowerCase > bLowerCase) {
//       return 1; // b comes before a

//     } else {
//       return 0; // leave as is

//     }

//   });

//   return arr;

// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named sortByLength that takes in an array of strings and returns the same array, with the strings sorted by their length, lowest to highest.
------------------------------------------------------------------------------------------------ */

const sortByLength = (arr) =>
  arr.sort((a, b) => {
    return a.length - b.length;
  });
//   {

//   arr.sort ( (a, b) => {

//     if ( a.length < b.length) {
//       return -1; // a comes before b

//     } else if (a.length > b.length) {
//       return 1; // b comes before a

//     } else {
//       return 0; // leave as is

//     }

//   });

//   return arr;

// };


// [10, 2.8, 1, -47.75]
/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers by their length.

For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.
------------------------------------------------------------------------------------------------ */

const sortNumbersByLength = (arr) =>
  arr.sort((a, b) => {
    const aLength = String(a).length;
    const bLength = String(b).length;
    return aLength - bLength;
  });
//   {

//   arr.sort ( (a, b) => {

//     // Convert a and b to strings first in order to determine length of numbers
//     let aLength = String(a).length;
//     let bLength = String(b).length;

//     if ( aLength < bLength) {
//       return -1; // a comes before b

//     } else if (aLength > bLength) {
//       return 1; // b comes before a

//     } else {
//       return 0; // leave as is

//     }

//   });

//   return arr;

// };

/*-----------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named sortPeople that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names. Do not worry about capitalization or first names.
------------------------------------------------------------------------------------------------ */

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const people = [
  new Person('Wes', 'Washington', 25),
  new Person('Casey', 'Codefellow', 38),
  new Person('Stan', 'Seattle', 67),
];

const sortPeople = (arr) =>
  arr.sort((a, b) => {
    return a.lastName.localeCompare(b.lastName);
  });
//   {
//   arr.sort( (a, b) => {

//     if ( a.lastName < b.lastName) {
//       return -1; // a comes before b

//     } else if (a.lastName > b.lastName) {
//       return 1; // b comes before a

//     } else {
//       return 0; // leave as is

//     }

//   });

//   return arr;
// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names.

If two people share the same last name, alphabetize on their first name.

If two people have the same full name, the younger one should come first. Do not worry about capitalization.
------------------------------------------------------------------------------------------------ */

const sortPeopleBetter = (arr) =>
  arr.sort((a, b) => {
    // Compare by last name first
    let lastNameComparison = a.lastName.localeCompare(b.lastName);
    if (lastNameComparison !== 0){
      return lastNameComparison; // if different, use this comparison
    }

    // Compare by first name if last names are the same
    let firstNameComparison = a.firstName.localeCompare(b.firstName);
    if (firstNameComparison !== 0) {
      return firstNameComparison; // if different, use this comparison
    }

    // If both last name and first name are the same, compare by age (younger first)
    return a.age - b.age;
  });
//   {
//   arr.sort ( (a, b) => {

//     if ( a.lastName < b.lastName) {
//       return -1; // a comes before b

//     } else if (a.lastName > b.lastName) {
//       return 1; // b comes before a

//     } else {

//       if (a.firstName < b.firstName) {
//         return -1; // a comes before b

//       } else if (a.firstName > b.firstName) {
//         return 1; // b comes before a

//       } else {
//         return a.age - b.age; // If returns a negative number a comes before b, if returns positive number, b comes before a, if equal to zero change nothing.

//       }

//     }

//   });

//   return arr;

// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 12 - Stretch Goal

Write a function named sortMeetingsByDay that takes in an array of objects, each of which represents a meeting happening a particular day of the week, with a particular start time and end time.

Sort the meetings by the day on which they happen, Monday-Friday. It does not matter which order meetings come in on a particular day. For example, if there are two meetings on Monday, it does not matter which comes first.
------------------------------------------------------------------------------------------------ */

function Meeting(dayOfWeek, start, end) {
  this.dayOfWeek = dayOfWeek;
  this.start = start;
  this.end = end;
}
const meetings = [
  new Meeting('Monday', '0900', '1000'),
  new Meeting('Wednesday', '1300', '1500'),
  new Meeting('Tuesday', '1145', '1315'),
  new Meeting('Wednesday', '0930', '1000'),
  new Meeting('Monday', '0900', '0945'),
  new Meeting('Friday', '1200', '1345'),
];

// Define a mapping of days of the week to numeric values for sorting
const weekInOrder = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7
};

const sortMeetingsByDay = (arr) =>
  arr.sort((a, b) => {
    // Get the numeric value for each day using the weekInOrder mapping
    let dayA = weekInOrder[a.dayOfWeek];
    let dayB = weekInOrder[b.dayOfWeek];

    // Sort meetings based on the numeric value of the day
    return dayA - dayB;
  });
//   {

//   // Convert a, b (days of week from arr into numbers in order to compare and sort)
//   let weekInOrder = {
//     Monday: 1,
//     Tuesday: 2,
//     Wednesday: 3,
//     Thursday: 4,
//     Friday: 5,
//   };

//   arr.sort ( (a, b) => {

//     // Assign number to dayA and dayB variables based on .dayOfWeek from array
//     let dayA = weekInOrder[a.dayOfWeek];
//     let dayB = weekInOrder[b.dayOfWeek];

//     if ( dayA < dayB) {
//       return -1; // a comes before b

//     } else if (dayA > dayB) {
//       return 1; // b comes before a

//     } else {

//       if (a.start < b.start) { // sort by time
//         return -1;

//       } else if (a.start > b.start) {
//         return 1;

//       } else {
//         return 0;

//       }
//     }

//   });

//   return arr;

// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 13 - Stretch Goal

This challenge should use the array of meetings from challenge 12, above.

Sort the meetings in the order that they start. If two meetings start at the same time on the same day, the shorter meeting should come first.

You DO NOT need to use your solution to Challenge 12 in completing Challenge 13.
------------------------------------------------------------------------------------------------ */

const sortSchedule = (arr) =>
  arr.sort ((a, b) => {
    // Assign numeric values to dayA and dayB based on weekInOrder
    let dayA = weekInOrder[a.dayOfWeek];
    let dayB = weekInOrder[b.dayOfWeek];

    // Check by day first
    let dayComparison = dayA - dayB;
    if (dayComparison !== 0) {
      return dayComparison; // Sort based on the day of the week
    }

    // Convert start times to numbers for comparison (are saved as strings in data)
    let startA = parseInt(a.start, 10);
    let startB = parseInt(b.start, 10);

    // Check by start time if days are the same
    if (startA !== startB) {
      return startA - startB; // Sort based on start time
    }

    // If start time is the same, sort by duration (shorter meeting first)
    let durationA = parseInt(a.end, 10) - startA;
    let durationB = parseInt(b.end, 10) - startB;

    return durationA - durationB; // Sort shorter duration first
  });

// if ( dayA < dayB) {
//   return -1; // a comes before b

// } else if (dayA > dayB) {
//   return 1; // b comes before a

// } else {

//   if (a.start < b.start) { // sort by time
//     return -1;

//   } else if (a.start > b.start) {
//     return 1;

//   } else {
//     return a.end - a.start - (b.end - b.start); // compare, if returns negative, a comes before b, if returns positive b comes before a

//   }
// }

// });

// return arr;

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-03.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return an array of uppercase animal names', () => {
    const arr = ['BeAr', 'lIon'];
    expect(updateAnimal(arr, upper)[0]).toStrictEqual('BEAR');
    expect(updateAnimal(arr, upper)[1]).toStrictEqual('LION');
  });
  test('It should return an array of lowercase animal names', () => {
    const arr = ['BeAr', 'lIon'];
    expect(updateAnimal(arr, lower)[0]).toStrictEqual('bear');
    expect(updateAnimal(arr, lower)[1]).toStrictEqual('lion');
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array of names sorted alphabetically', () => {
    expect(sortNames(['able', 'Bob'])[0]).toStrictEqual('Bob');
  });
});

describe('Testing challenge 3', () => {
  test('It should sort low-to-high the numbers in an array', () => {
    expect(sortNumbers([8, 3, 2, 9, 12, 1, 115])).toStrictEqual([1, 2, 3, 8, 9, 12, 115]);
  });
});

describe('Testing challenge 4', () => {
  test('It should sort high-to-low the numbers in an array', () => {
    const nums = [3,4,5,6,7];
    expect(sortBackwards(nums)).toStrictEqual([7,6,5,4,3]);
    expect(sortBackwards([3,2,1])).toStrictEqual([3,2,1]);
    expect(sortBackwards([12,20,3])).toStrictEqual([20, 12, 3]);
    expect(sortBackwards([])).toStrictEqual([]);
    expect(sortBackwards([1])).toStrictEqual([1]);
  });
});

describe('Testing challenge 5', () => {
  test('It should sort strings alphabetically', () => {
    expect(alphabetize(['alphabet', 'Zebra', 'Alphabet', 'carrot'])).toStrictEqual([ 'Alphabet', 'Zebra', 'alphabet', 'carrot']);
    expect(alphabetize(['alphabet','Alphabet', 'carrot'])).toStrictEqual([ 'Alphabet', 'alphabet', 'carrot']);
    expect(alphabetize([])).toStrictEqual([]);
  });
});

describe('Testing challenge 6', () => {
  test('It should sort items by their price', () => {
    expect(sortByPrice([
      {name: 'Sweatshirt', price: 45},
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15}
    ])).toStrictEqual([
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15},
      {name: 'Sweatshirt', price: 45},
    ]);
    expect(sortByPrice([{price: 12}, {price: 10}])).toStrictEqual([{price: 10}, {price: 12}]);
    expect(sortByPrice([])).toStrictEqual([]);
  });
});

describe('Testing challenge 7', () => {
  test('It should alphabetize without regard to capitalization', () => {
    expect(alphabetizeBetter(['Alice', 'apple', 'alert', 'Average'])).toStrictEqual([ 'alert', 'Alice', 'apple', 'Average' ]);
    const ans = alphabetizeBetter(['alphabet', 'Zebra', 'Alphabet', 'carrot']);
    expect(ans.slice(0,2)).toEqual(expect.arrayContaining([ 'Alphabet','alphabet']));
    expect(ans.slice(2)).toStrictEqual(['carrot', 'Zebra']);
  });
});

describe('Testing challenge 8', () => {
  test('It should sort strings by length', () => {
    const ans = sortByLength(['alphabet', 'Zebra', 'Alphabet', 'carrot']);
    expect(ans.slice(0,2)).toStrictEqual(['Zebra', 'carrot']);
    expect(ans.slice(2,4)).toEqual(expect.arrayContaining(['Alphabet', 'alphabet']));
    expect(sortByLength(['a', 'bc', ''])).toStrictEqual(['', 'a', 'bc']);
    expect(sortByLength(['a'])).toStrictEqual(['a']);
    expect(sortByLength([])).toStrictEqual([]);
  });
});

describe('Testing challenge 9', () => {
  test('It should sort numbers by their length', () => {
    expect(sortNumbersByLength([10, 2.8, 1, -47.75])).toStrictEqual([1, 10, 2.8, -47.75]);
    expect(sortNumbersByLength([100, 2.82, 1, -47.75])).toStrictEqual([1, 100, 2.82, -47.75]);
    expect(sortNumbersByLength([1,2,3])).toEqual(expect.arrayContaining([1,2,3]));
  });
});

describe('Testing challenge 10', () => {
  test('It should sort people by their last names', () => {
    expect(sortPeople(people)).toStrictEqual([
      new Person('Casey', 'Codefellow', 38),
      new Person('Stan', 'Seattle', 67),
      new Person('Wes', 'Washington', 25),
    ]);
    expect(sortPeople([{lastName: 'banana'}, {lastName: 'apple'}]))
      .toStrictEqual([{lastName: 'apple'}, {lastName: 'banana'}]);
  });
});

describe('Testing challenge 11', () => {
  test('It should sort people with more strict ordering', () => {
    const family = [
      new Person('Casey', 'Codefellows', 55),
      new Person('Casey', 'Codefellows', 37),
      new Person('Charlie', 'Codefellows', 21),
      new Person('Charles', 'Codefellows', 29),
      new Person('Carol', 'Codefellow', 88),
    ];
    expect(sortPeopleBetter(family)).toStrictEqual([
      new Person('Carol', 'Codefellow', 88),
      new Person('Casey', 'Codefellows', 37),
      new Person('Casey', 'Codefellows', 55),
      new Person('Charles', 'Codefellows', 29),
      new Person('Charlie', 'Codefellows', 21),
    ]);
    expect(sortPeopleBetter([{firstName: 'andrew', lastName: 'apple'}, {firstName: 'andre', lastName: 'apple'}]))
      .toStrictEqual([{firstName: 'andre', lastName: 'apple'}, {firstName: 'andrew', lastName: 'apple'}]);
  });
});

describe('Testing challenge 12', () => {
  test('It should sort meetings by the day on which they happen', () => {
    const sortedMeetings = sortMeetingsByDay(meetings);
    expect(sortedMeetings.slice(0,2)).toEqual(expect.arrayContaining([new Meeting('Monday', '0900', '0945'), new Meeting('Monday', '0900', '1000')]));
    expect(sortedMeetings[2]).toStrictEqual(new Meeting('Tuesday', '1145', '1315'));
    expect(sortedMeetings.slice(3,5)).toEqual(expect.arrayContaining([new Meeting('Wednesday', '0930', '1000'), new Meeting('Wednesday', '1300', '1500')]));
    expect(sortedMeetings[5]).toStrictEqual(new Meeting('Friday', '1200', '1345'));
  });
});

describe('Testing challenge 13', () => {
  test('It should sort meetings by when they happen', () => {
    expect(sortSchedule(meetings)).toStrictEqual([
      new Meeting('Monday', '0900', '0945'),
      new Meeting('Monday', '0900', '1000'),
      new Meeting('Tuesday', '1145', '1315'),
      new Meeting('Wednesday', '0930', '1000'),
      new Meeting('Wednesday', '1300', '1500'),
      new Meeting('Friday', '1200', '1345'),
    ]);
  });
});
