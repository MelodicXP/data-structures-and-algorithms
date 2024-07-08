# Code Challenge 31 - Hash Tables

## Hashmap Repeated Word

### Feature Tasks

* Write a function called repeated word that finds the first word to occur more than once in a string
* Arguments: string
* Return: string

### Whiteboard process HashTable

![Hash Table Repeated Word](../../assets/codeChallenge31.png);

### Big O - HashTable Repeated Word

**Time Complexity - O(n):**

* Converting text to lowercase, removing punctuation, and splitting into words all take linear time, O(n).
* Iterating over the words and performing hash table operations take linear time in total, O(n).

**Space Complexity - O(n):**

* The space complexity is dominated by the space required to store the words in the hash table and the array, resulting in O(n).
