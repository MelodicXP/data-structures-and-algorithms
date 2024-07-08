# Code Challenge 30 - Hash Tables

## HashTable - class

### Implement a Hashtable Class with the following methods:

* set
  * Arguments: key, value
  * Returns: nothing
  * This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  * Should a given key already exist, replace its value from the value argument given to this method.
* get
  * Arguments: key
  * Returns: Value associated with that key in the table
* has
  * Arguments: key
  * Returns: Boolean, indicating if the key exists in the table already.
* keys
  * Returns: Collection of keys
* hash
  * Arguments: key
  * Returns: Index in the collection for that key

### Whiteboard process HashTable

![Hash Table Class](../assets/hashClassCodeChallenge30.png);

### Big O - HashTable Class

**Time Complexity - O(1) on average:**

* Most operations (set, get, has) have an average time complexity of O(1).
* The keys method has a time complexity of O(n).

**Space Complexity - O(n):**

* The space complexity is dominated by the size of the buckets array and the elements stored in it, resulting in O(n).
