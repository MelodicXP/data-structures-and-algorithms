# Trees

## Node

* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

## Binary Tree

* Create a Binary Tree class
  * Define a method for each of the depth first traversals:
    * pre order()
    * in order()
    * post order()
  * Each depth first traversal method should return an array of values, ordered appropriately.

### Whiteboard process Binary Tree

![binary tree](../assets/binary-search-tree.png)

### Approach and Efficiency Binary Tree

The approach taken was similar to instruction which was defining problem domain, writing test first, coding to run the tests on, and refactoring if necessary.

### **Big O - Binary Tree**

**Time Complexity - O(n):**
Each of the methods in Binary Tree Class involves a traversal that visits each node exactly once. The time complexity is therefore linear relative to the number of nodes in the binary tree. This applies regardless of the specific type of depth-first traversal (pre-order, in-order, or post-order). Each node's value is processed, and the traversal calls itself recursively for the left and right children if they exist.

**Space Complexity - O(n):**
In the worst case: The space complexity is primarily determined by two factors:

* The recursive call stack, which can go as deep as the height of the tree.

* The list preOrderResults, inOrderResults, or postOrderResults that collects the node values.

In a skewed tree (where each node has only one child), the recursive call stack can grow to O(n), where n is the number of nodes.

## Binary Search Tree

* Create a Binary Search Tree class
  * This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
  * Add()
    * Arguments: value
    * Return: nothing
    * Adds a new node with that value in the correct location in the binary search tree.
  * Contains()
    * Argument: value
    * Returns: boolean indicating whether or not the value is in the tree at least once.

### Whiteboard process Binary Search Tree

![binary tree](../assets/binary-search-tree.png)

### Approach and Efficiency Binary Search Tree

The approach taken was similar to instruction which was defining problem domain, writing test first, coding to run the tests on, and refactoring if necessary.

### **Big O - Binary Search Tree**

#### addNode() method

**Time Complexity - O(h):**

* This method's time complexity depends on the height of the tree (h). In the best-case scenario, where the tree is balanced, the height of the tree is log(n) and thus the time complexity is O(log n). However, in the worst case, such as when the tree becomes a skewed tree (i.e., more like a linked list), the height becomes proportional to n (the number of nodes), leading to a time complexity of O(n).

**Space Complexity - O(h):**

* The space complexity is primarily determined by the recursion stack, which in the worst case (a skewed tree) might grow to O(n), but for a balanced tree, it would be O(log n). No additional significant space is used except for the recursive calls.

In a skewed tree (where each node has only one child), the recursive call stack can grow to O(n), where n is the number of nodes.

#### contains() method

**Time Complexity - O(h):**

* Similar to addNode, the time complexity depends on the height of the tree. The method searches down the tree from the root to the leaf, making comparisons at each node. For a balanced tree, this operation takes O(log n) time, and for a skewed tree, it takes O(n).

**Space Complexity - O(h):**

* As with addNode, the space complexity is influenced by the depth of the recursive call stack. For balanced trees, the maximum recursion depth would be O(log n), and for skewed trees, it would be O(n).
