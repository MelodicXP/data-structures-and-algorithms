'use strict';

// Merge Sort Function
let mergeSort = (arr) => {
  let n = arr.length;

  // Base case: if array length is 1 or less, it is already sorted
  if (n <= 1) return;

  // Find middle index
  let mid = Math.floor(n/2);

  // Split array into left and right halves
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort left half
  mergeSort(left);

  // Recursively sort right half
  mergeSort(right);

  // Merge sorted halves back into original array
  merge(left, right, arr);

};

// Merge function to combine two sorted arrays
let merge = (left, right, arr) => {
  let i = 0; // Index for left array
  let j = 0; // Index for right array
  let k = 0; // INdex for merged array

  // Compare elements from left and right arrays and merge in sorted order
  while( i < left.length && j < right.length ) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i += 1;
    } else {
      arr[k] = right[j];
      j += 1;
    }
    k += 1;
  }

  // If there are remaining elements in left array, add them to the original array
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  // If there are remaining elements in right array, add them to the original array
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }

};

// Example usage:
let array = [8,4,23,42,16,15];
mergeSort(array);
console.log(array);

let reverseSortedArray = [20,18,12,8,5,-2];
mergeSort(reverseSortedArray);
console.log(reverseSortedArray);

let fewUniques = [5,12,7,5,5,7];
mergeSort(fewUniques);
console.log(mergeSort);

let nearlySorted =  [2,3,5,7,13,11];
mergeSort(nearlySorted);
console.log(nearlySorted);
