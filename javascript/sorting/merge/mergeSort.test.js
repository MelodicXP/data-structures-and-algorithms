'use strict';

const { mergeSort, merge } = require('./mergeSort');

describe('Merge Sort Functionality', () => {
  test('should sort an array in ascending order', () => {
    const array = [8, 4, 23, 42, 16, 15];
    const expected = [4, 8, 15, 16, 23, 42];
    mergeSort(array);
    expect(array).toEqual(expected);
  });

  test('should sort a reverse sorted array', () => {
    const reverseSortedArray = [20, 18, 12, 8, 5, -2];
    const expected = [-2, 5, 8, 12, 18, 20];
    mergeSort(reverseSortedArray);
    expect(reverseSortedArray).toEqual(expected);
  });

  test('should sort an array with duplicate values', () => {
    const fewUniques = [5, 12, 7, 5, 5, 7];
    const expected = [5, 5, 5, 7, 7, 12];
    mergeSort(fewUniques);
    expect(fewUniques).toEqual(expected);
  });

  test('should sort a nearly sorted array', () => {
    const nearlySorted = [2, 3, 5, 7, 13, 11];
    const expected = [2, 3, 5, 7, 11, 13];
    mergeSort(nearlySorted);
    expect(nearlySorted).toEqual(expected);
  });

  test('should handle an empty array', () => {
    const emptyArray = [];
    const expected = [];
    mergeSort(emptyArray);
    expect(emptyArray).toEqual(expected);
  });

  test('should handle an array with one element', () => {
    const singleElementArray = [42];
    const expected = [42];
    mergeSort(singleElementArray);
    expect(singleElementArray).toEqual(expected);
  });

  test('should handle an array with all identical elements', () => {
    const identicalElementsArray = [5, 5, 5, 5, 5];
    const expected = [5, 5, 5, 5, 5];
    mergeSort(identicalElementsArray);
    expect(identicalElementsArray).toEqual(expected);
  });

  test('should sort an array with negative numbers', () => {
    const arrayWithNegatives = [3, -1, 4, -2, 0];
    const expected = [-2, -1, 0, 3, 4];
    mergeSort(arrayWithNegatives);
    expect(arrayWithNegatives).toEqual(expected);
  });
});

describe('Merge Functionality', () => {
  test('should merge two sorted arrays into one sorted array', () => {
    const left = [1, 3, 5];
    const right = [2, 4, 6];
    const result = [];
    const expected = [1, 2, 3, 4, 5, 6];
    merge(left, right, result);
    expect(result).toEqual(expected);
  });

  test('should merge when one array is empty', () => {
    const left = [];
    const right = [2, 4, 6];
    const result = [];
    const expected = [2, 4, 6];
    merge(left, right, result);
    expect(result).toEqual(expected);
  });

  test('should merge when both arrays are empty', () => {
    const left = [];
    const right = [];
    const result = [];
    const expected = [];
    merge(left, right, result);
    expect(result).toEqual(expected);
  });

  test('should merge when arrays have negative numbers', () => {
    const left = [-3, -1, 2];
    const right = [-2, 0, 3];
    const result = [];
    const expected = [-3, -2, -1, 0, 2, 3];
    merge(left, right, result);
    expect(result).toEqual(expected);
  });

  test('should merge when arrays have duplicate values', () => {
    const left = [1, 3, 3];
    const right = [3, 4, 5];
    const result = [];
    const expected = [1, 3, 3, 3, 4, 5];
    merge(left, right, result);
    expect(result).toEqual(expected);
  });
});

