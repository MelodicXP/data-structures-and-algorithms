# Code Challenge 32 - Tree Intersection

## Tree Intersection

### Feature Tasks

* Write a function called tree_intersection that takes two binary trees as parameters.
* Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

### Whiteboard process HashTable

![Tree Intersection](../../javascript/assets/codeChallenge32.png);

### Big O - addTreeToHashMap Function

**Time Complexity - O(n):**

* The recursive traversal visits each node exactly once.
* Each insertion into the hash table is an O(1) operation on average.
* Therefore, the overall time complexity is O(n), where n is the number of nodes in the tree.

**Space Complexity - O(n):**

* The space complexity is dominated by the space required to store the nodes in the hash table, resulting in O(n).
* Additionally, the recursion stack can go as deep as the height of the tree. In the worst case, this is O(n) for a skewed tree.
* Overall space complexity is O(n).

### Big O - findTreeIntersection Function

**Time Complexity - O(m + n):**

* Creating the hash table from the first tree (addTreeToHashMap) takes O(m), where m is the number of nodes in tree1.
* Iterating over the nodes of the second tree and checking for each value in the hash table takes O(n), where n is the number of nodes in tree2.
* Therefore, the overall time complexity is O(m + n).

**Space Complexity - O(m + n):**

* The space complexity for the hash table storing the nodes from the first tree is O(m).
* The space complexity for the stack used to traverse the second tree is O(h), where h is the height of the second tree. In the worst case, this is O(n).
* The space complexity for storing the duplicate values is O(min(m, n)) in the worst case where all nodes are duplicates.
* Therefore, the overall space complexity is O(m + n).
