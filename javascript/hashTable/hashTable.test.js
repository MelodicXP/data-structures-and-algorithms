'use strict';

const { HashTable } = require('./hashTable');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  test('should correctly hash a key to an in-range value', () => {
    const hashValue1 = hashTable.hash('Greenwood');
    const hashValue2 = hashTable.hash('Downtown');
    expect(hashValue1).toBeGreaterThanOrEqual(0);
    expect(hashValue1).toBeLessThan(hashTable.size);
    expect(hashValue2).toBeGreaterThanOrEqual(0);
    expect(hashValue2).toBeLessThan(hashTable.size);
    expect(hashValue1).not.toBe(hashValue2); // Different keys should have different hashes (in general)
  });

  test('setting a key/value results in the value being in the data structure', () => {
    hashTable.set('Greenwood', '98103');
    const index = hashTable.hash('Greenwood');
    expect(hashTable.buckets[index]).toEqual(expect.arrayContaining([{ key: 'Greenwood', value: '98103' }]));
  });

  test('retrieving based on a key returns the value stored', () => {
    hashTable.set('Greenwood', '98103');
    expect(hashTable.get('Greenwood')).toBe('98103');
  });

  test('successfully returns null for a key that does not exist', () => {
    expect(hashTable.get('Unknown')).toBe(null);
  });

  test('successfully returns a list of all unique keys that exist', () => {
    hashTable.set('Greenwood', '98103');
    hashTable.set('Downtown', '98101');
    hashTable.set('Alki Beach', '98116');
    expect(hashTable.keys()).toEqual(expect.arrayContaining(['Greenwood', 'Downtown', 'Alki Beach']));
  });

  test('successfully handle a collision within the hashtable', () => {
    // Force a collision by setting the same hash for different keys
    hashTable.hash = jest.fn().mockReturnValue(1); // Mock hash function to always return 1
    hashTable.set('Key1', 'Value1');
    hashTable.set('Key2', 'Value2');

    const bucket = hashTable.buckets[1];
    expect(bucket).toEqual(expect.arrayContaining([{ key: 'Key1', value: 'Value1' }, { key: 'Key2', value: 'Value2' }]));
  });

  test('successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    // Force a collision by setting the same hash for different keys
    hashTable.hash = jest.fn().mockReturnValue(1); // Mock hash function to always return 1
    hashTable.set('Key1', 'Value1');
    hashTable.set('Key2', 'Value2');

    expect(hashTable.get('Key1')).toBe('Value1');
    expect(hashTable.get('Key2')).toBe('Value2');
  });

  test('should correctly handle overwriting values', () => {
    hashTable.set('Greenwood', '98103');
    expect(hashTable.get('Greenwood')).toBe('98103');

    hashTable.set('Greenwood', '98133');
    expect(hashTable.get('Greenwood')).toBe('98133');
  });

  test('should check if a key exists', () => {
    hashTable.set('Greenwood', '98103');
    expect(hashTable.has('Greenwood')).toBe(true);
    expect(hashTable.has('Unknown')).toBe(false);
  });
});

