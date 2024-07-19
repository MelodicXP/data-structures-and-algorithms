# Code Challenge 33 - Left Joins

## Left Joins - class 33

### Implement Left Joins function:

* Write a function called left join
* Arguments: two hash maps
  * The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
  * The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

### Whiteboard process HashTable

![Hash Table Class](../../assets/codeChallenge33.png);

### Big O - Left Joins

**Time Complexity - O(n) on average:**

* Iterating over all keys in the first hash map (synonyms map) takes O(n). For each key, performing two O(1) operations (get on both hash maps) results in an overall O(n) time complexity.

**Space Complexity - O(n):**

* The resulting array is proportional to the number of keys in the first hash map, resulting in O(n) space complexity.
