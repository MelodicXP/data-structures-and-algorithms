'use strict';

let insertionSort = (arr) => {
  let sorted = []; // Create empty array to hold sorted values
  sorted[0] = arr[0]; // Initialize the sorted array with the first element of the unsorted array

  // Iterate through the unsorted array starting from the second element
  for(let i = 1; i < arr.length; i++) {
    // Insert each element into its correct position in the sorted array
    insert(sorted, arr[i]);
  }

  return sorted; // Return sorted array
};

let insert = (sortedArr, value) => {
  let i = 0; // Start at the beginning of the sorted array

  // Find the correct position to insert the value by moving through the array
  while (value > sortedArr[i]) {
    i += 1; // Increment index until the correct position is found
  }

  // Shift all elements to the right to make space for the new value
  while (i < sortedArr.length) {
    let temp = sortedArr[i]; // Temporarily store the current value
    sortedArr[i] = value; // Insert the new value in its correct position
    value = temp; // Update value to the old value that was just replaced
    i += 1; // Move to the next index
  }

  // After shifting, append the remaining value to the end of the array
  sortedArr.push(value); // modifies by reference sort array
};


let unsortedArray = [8, 4, 23, 42, 16, 15];
let reverseSortedArray = [20,18,12,8,5,-2];
let fewUniques = [5,12,7,5,5,7];

let newArray = insertionSort(unsortedArray);
let sortedArrayTwo = insertionSort(reverseSortedArray);
let sortedArrayThree = insertionSort(fewUniques);
console.log(newArray, sortedArrayTwo, sortedArrayThree);
