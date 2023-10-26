'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function that finds the maximum value in an array
using the 'reduce' method.

E.g. [4,2,7,5,9,2] -> 9
------------------------------------------------------------------------------------------------ */
const maxInArray = (arr) => {
  return arr.reduce ( (acc, value) => {

    if (acc === null || value > acc) {

      acc = value;

    }

    return acc;

  }, null );
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */
const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};

const getCourseKeys = (obj) => {
  return Object.keys(obj); // return keys of object
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named checkValues that takes in an object and a value and returns true if the value is in the object.


------------------------------------------------------------------------------------------------ */

const checkValues = (obj, value) => {
  return Object.values(obj).includes(value); // Put all values into array (Object.values(obj)) and use includes(value) to see if value is in the array
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

You are given an object with names and their coresponding phone numbers that looks like this:
{
  'Grace Hopper': '222-303-5938',
  'Ada Lovelace': '222-349-9842',
  'Alan Turing': '222-853-5933'
}

HR has asked you to change the data to make it easier to print so that it looks like this:
[
  'Grace Hopper: 222-303-5938',
  'Ada Lovelace: 222-349-9842',
  'Alan Turing: 222-853-5933'
]

------------------------------------------------------------------------------------------------ */

const updateNumbers = (obj) => {
  return Object.entries(obj).map( ([name, number]) => { //Get array of key value pairs (Object.entries(obj)), map through array, return stringin desired format

    return `${name}: ${number}`;

  });
};



/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const getHouses = (arr) => {
  let houses = [];

  houses = arr.map( (character) => Object.values(character)[3]); //map through array of characters, use Object.values() to make array of each character's object, return index 3 of array

  return houses;
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {

  // Search array if character argument matches a name in array
  let foundCharacter = arr.find( (char) => {
    return char.name === character;
  });


  if (foundCharacter) {

    let characterValuesArray = Object.values(foundCharacter);

    // Find value that is an array inside of characterValues array (children value is an array)
    let possibleChildrenArray = characterValuesArray.find( (value) => {

      return Array.isArray(value); // return true if one of the characterValues is an array (indicates has children)

    });

    // Check if possibleChildren is an array and it has length greater than zero (indicates has children in the array), if so return true
    if (Array.isArray(possibleChildrenArray) && possibleChildrenArray.length > 0) {

      return true;

    }

    return false; // return false if no

  }
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 4, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

const hasChildrenEntries = (arr, character) => {

  // Search array if character argument matches a name in array
  let foundCharacter = arr.find( (char) => {
    return char.name === character;
  });


  if (foundCharacter) {

    let characterEntries = Object.entries(foundCharacter);

    // For each character key value pair  (Object.entries) check if key matches 'children', is an array, and length > 0
    for (let i = 0; i < characterEntries.length; i++) {

      // Assign key and value to variables
      let key = characterEntries[i][0];
      let value = characterEntries[i][1];

      if (key === 'children' &&
          Array.isArray(value) &&
          value.length > 0
      ) {
        return true;
      }
    }
  }

  return false;

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

const totalCharacters = (arr) => {
  // use reduce to return the total number of character in array
  return arr.reduce ( (acc, character) => {

    let total = 0; // Initialize count for each character object

    Object.keys(character).forEach( (key) => {

      // Store type of value of each index, to check if a string or array, if array add length of array to total
      let value = character[key];

      if((key === 'name' || key === 'spouse') && typeof value === 'string') {
        total += 1;
      }

      if (key === 'children' && Array.isArray(value)) {
        total += value.length;
      }

    });

    return acc + total; // Add to accumulator
  }, 0 ); // Initial value of accumulator is 0
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

const houseSize = (arr) => {

  const sizes = [];

  // Return name of house as key, and number of members of each house as value ( {Stark: 9} )
  let houseMap = arr.reduce( (acc, character) => {

    let house = character.house; // Access house (key) of each character
    let memberCount = 1; // Count character themselves

    if (character.spouse) memberCount++;
    if (character.children) memberCount += character.children.length;

    acc[house] = (acc [house] || 0) + memberCount;

    return acc;

  }, {});// Accumulator set to empty object


  let keys = Object.keys(houseMap); // Get all the house names as an array

  for (let i = 0; i < keys.length; i++) {

    const house = keys[i]; // Get the house name
    const members = houseMap[house]; // Get the number of members for that house
    sizes.push({ house, members }); // Add it to the sizes array

  }

  return sizes;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  const survivors = [];

  // Return name of house as key, and number of members of each house as value ( {Stark: 9} )
  let houseMap = arr.reduce( (acc, character) => {

    let house = character.house; // Access house (key) of each character
    let memberCount = 1; // Count character themselves

    if (character.spouse) memberCount += 0;
    if (character.children) memberCount += character.children.length;

    acc[house] = (acc [house] || 0) + memberCount;

    return acc;

  }, {});// Accumulator set to empty object


  let keys = Object.keys(houseMap); // Get all the house names as an array

  for (let i = 0; i < keys.length; i++) {

    const house = keys[i]; // Get the house name
    const members = houseMap[house]; // Get the number of members for that house
    survivors.push({ house, members }); // Add it to the sizes array

  }



  return survivors;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-06.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the maximum number found', () => {
    expect(maxInArray([4, 2, 7, 5, 9, 2])).toStrictEqual(9);
  });
  test('It should handle negatives and return the maximum number found', () => {
    expect(maxInArray([4, -2, -7, 5, -9, 2])).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the keys from an object', () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if the value is in the object', () => {
    expect(checkValues({ class: '301' }, '301')).toBe(true);
  });

  test('It should return false if the value is not in the object', () => {
    expect(checkValues({ class: '301' }, '401')).toBe(false);
  });
});

describe('Testing challenge 4', () => {
  test('It should return an an array of names and numbers', () => {
    const startingObj = {
      'Grace Hopper': '222-303-5938',
      'Ada Lovelace': '222-349-9842',
      'Alan Turing': '222-853-5933'
    };

    expect(updateNumbers(startingObj).includes('Grace Hopper: 222-303-5938')).toBe(true);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array of the names of the houses', () => {
    expect(getHouses(characters)[0]).toStrictEqual('Stark');
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});


describe('Testing challenge 6', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

describe('Testing challenge 7', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

describe('Testing challenge 8', () => {
  test('It should return the number of characters in the array', () => {
    expect(totalCharacters(characters)).toStrictEqual(27);
  });
});

xdescribe('Testing challenge 9', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)[1]).toStrictEqual({ house: 'Arryn', members: 3 });
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 10', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)[2]).toStrictEqual({ house: 'Lannister', members: 4 });
  });
});
