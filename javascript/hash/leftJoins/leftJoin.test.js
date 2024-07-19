'use strict';
const { HashTable } = require('../hashTable/hashTable');
const { leftJoin }= require('./leftJoins');

describe('leftJoin function', () => {
  let synonymsMap;
  let antonymsMap;

  beforeEach(() => {
    // Initialize the hash maps and populate them
    synonymsMap = new HashTable();
    antonymsMap = new HashTable();

    const synonyms = [
      { key: 'diligent', value: 'employed' },
      { key: 'fond', value: 'enamored' },
      { key: 'guide', value: 'usher' },
      { key: 'outfit', value: 'garb' },
      { key: 'wrath', value: 'anger' }
    ];

    const antonyms = [
      { key: 'diligent', value: 'idle' },
      { key: 'fond', value: 'averse' },
      { key: 'guide', value: 'follow' },
      { key: 'flow', value: 'jam' },
      { key: 'wrath', value: 'delight' }
    ];

    for (const item of synonyms) {
      synonymsMap.set(item.key, item.value);
    }

    for (const item of antonyms) {
      antonymsMap.set(item.key, item.value);
    }
  });

  it('should return correct left join results', () => {
    const result = leftJoin(synonymsMap, antonymsMap);
    const expected = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight']
    ];

    // Sort the arrays to ensure consistent order
    const sortFn = (a, b) => a[0].localeCompare(b[0]);

    expect(result.sort(sortFn)).toEqual(expected.sort(sortFn));
  });

  it('should handle empty second hash map', () => {
    const emptyAntonymsMap = new HashTable();
    const result = leftJoin(synonymsMap, emptyAntonymsMap);
    const expected = [
      ['diligent', 'employed', null],
      ['fond', 'enamored', null],
      ['guide', 'usher', null],
      ['outfit', 'garb', null],
      ['wrath', 'anger', null]
    ];

    // Sort the arrays to ensure consistent order
    const sortFn = (a, b) => a[0].localeCompare(b[0]);

    expect(result.sort(sortFn)).toEqual(expected.sort(sortFn));
  });

  it('should handle empty first hash map', () => {
    const emptySynonymsMap = new HashTable();
    const result = leftJoin(emptySynonymsMap, antonymsMap);
    const expected = [];

    expect(result).toEqual(expected);
  });

  it('should handle both hash maps being empty', () => {
    const emptySynonymsMap = new HashTable();
    const emptyAntonymsMap = new HashTable();
    const result = leftJoin(emptySynonymsMap, emptyAntonymsMap);
    const expected = [];

    expect(result).toEqual(expected);
  });
});
