# Code Challenge 34 - Most Common Word

## Find Most Common Word - Class 34

### Implement Find Most Common Word function:

* Write a function that determines the most common word in a book.
* The most efficient solution to this problem is to use a hash-table.
* Spaces don’t count, and words are not case sensitive (i.e. Cat, CAT, and cat are all the same)
* Don’t concern with punctuation.
* The function created should take in a string as an argument.
* The best approach to this is to iterate through the string and to keep a “tally” of how many times a word appears.
* The word should be the “key”, and a counter as the “value”.
* The word with the highest counter at the end is the returned word.
* It is possible for the candidate to have a “tempWord” and “tempCounter” that will hold the highest word and count so far. This will prevent them from having to iterate through the hash-table once the string is completed.
* Time and Space is O(n).

### Whiteboard process Most Common Word

![Most Common Word](../../assets/codeChallenge34.png);

### Big O - Left Joins

**Time Complexity - O(n) on average:**

* Splitting the string into words, converting to lowercase, and removing punctuation all take linear time, O(n).
* Iterating over the words and performing hash table operations take linear time in total, O(n).

**Space Complexity - O(n):**

* The space complexity is dominated by the space required to store the words in the hash table and the array, resulting in O(n).
