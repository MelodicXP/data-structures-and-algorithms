# Code Challenge 19 - Binary Search Tree Sum of Odd Values

## sumOfOddValuesInBst(tree) - function

* Find the sum of all the odd numbers in a binary search tree.
* Arguments: binary tree
* Returns: integer (sum of odd values)

### Whiteboard process Binary Tree

![Binary Search Tree Sum of Odd Values](../assets/bst-sum-of-odd-values.png);

### Big O - sumOfOddValuesInBST(tree)

**Time Complexity - O(n):**
Overall, the dominant factor in the time complexity is the processing of each node and adding its children to the queue. Since each node is visited once, and its children are enqueued once, the overall time complexity is O(n).

**Space Complexity - O(n):**
Overall, the space complexity is dominated by the space needed for the queue, which gives a space complexity of O(n).
