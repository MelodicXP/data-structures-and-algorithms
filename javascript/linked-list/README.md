# Linked Lists

## Node

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Linked List

* Create a Linked List class

* Within your Linked List class, include a head property.
  * Upon instantiation, an empty Linked List should be created.

* The class should contain the following methods
  * insert
    * Arguments: value
    * Returns: nothing
    * Adds a new node with that value to the head of the list with an O(1) Time performance.

  * includes
    * Arguments: value
    * Returns: Boolean
      * Indicates whether that value exists as a Node’s value somewhere within the list.

  * to string
    * Arguments: none
    * Returns: a string representing all the values in the Linked List, formatted as:
    * "{ a } -> { b } -> { c } -> NULL"

* Write the following methods for the Linked List class:

  * append
    * arguments: new value
    * adds a new node with the given value to the end of the list

  * insert before
    * arguments: value, new value
    * adds a new node with the given new value immediately before the first node that has the value specified

  * insert after
    * arguments: value, new value
    * adds a new node with the given new value immediately after the first node that has the value specified

* Write the following method for the Linked List class:

  * kth from end
    * argument: a number, k, as a parameter.
    * Return the node’s value that is k places from the tail of the linked list.
    * You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

* Write a function called zip lists

  * Arguments: 2 linked lists
  * Return: New Linked List, zipped as noted below
  * Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
  * Try and keep additional space down to O(1)
  * You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

* Write a function to reverse a singly linked list
  * No arguments, in place.
  * No return, reverses list in place

## Stack and Queue

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

* Node
  * Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
* Stack
  * Create a Stack class that has a top property. It creates an empty Stack when instantiated.
    * This object should be aware of a default empty value assigned to top when the stack is created.
    * The class should contain the following methods:
    * push
      * Arguments: value
      * adds a new node with that value to the top of the stack with an O(1) Time performance.
    * pop
      * Arguments: none
      * Returns: the value from node from the top of the stack
      * Removes the node from the top of the stack
      * Should raise exception when called on empty stack
    * peek
      * Arguments: none
      * Returns: Value of the node located at the top of the stack
      * Should raise exception when called on empty stack
    * is empty
      * Arguments: none
      * Returns: Boolean indicating whether or not the stack is empty.
* Queue
  * Create a Queue class that has a front property. It creates an empty Queue when instantiated.
    * This object should be aware of a default empty value assigned to front when the queue is created.
    * The class should contain the following methods:
    * enqueue
      * Arguments: value
      * adds a new node with that value to the back of the queue with an O(1) Time performance.
    * dequeue
      * Arguments: none
      * Returns: the value from node from the front of the queue
      * Removes the node from the front of the queue
      * Should raise exception when called on empty queue
    * peek
      * Arguments: none
      * Returns: Value of the node located at the front of the queue
      * Should raise exception when called on empty stack
    * is empty
      * Arguments: none
      * Returns: Boolean indicating whether or not the queue is empty

You have access to the Node class and all the properties on the Linked List class.

## Pseudo Queue

* Create a new class called pseudo queue.
  * Do not use an existing Queue.
  * Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
  * Internally, utilize 2 Stack instances to create and manage the queue
* Methods:
  * enqueue
    * Arguments: value
    * Inserts a value into the PseudoQueue, using a first-in, first-out approach.
  * dequeue
    * Arguments: none
    * Extracts a value from the PseudoQueue, using a first-in, first-out approach.

## Whiteboard process

![linked list whiteboard](../assets/linked-lists-whiteboard.png)
![linked list insertions whiteboard](../assets/linked-list-insertions.png)
![linked list kth from end whiteboard](../assets/linked-lists-kth-whiteboard.png)
![linked list zip whiteboard](../assets/linked-lists-zipped-whiteboard.png)
![linked list reverse order whiteboard](../assets/linked-list-reversed.png)
![pseudo queue using stacks](../assets/pseudo-queue-whiteboard.png)

## Approach and Efficiency

The approach taken was similar to instruction which was defining problem domain, writing test first, coding to run the tests on, and refactoring if necessary.

### **The Big O is:**

### 1. `append(value)`

* **Time Complexity**: O(n)
  * **Why**: In the worst-case scenario, you have to traverse the entire list to find the last node. The time it takes to perform this operation grows linearly with the number of nodes in the list, hence O(n), where `n` is the number of nodes.
* **Space Complexity**: O(1)
  * **Why**: You're only creating one new node regardless of the size of the input list. The space used does not grow with the size of the input list.

### 2. `insertBefore(targetValue, newValue)`

* **Time Complexity**: O(n)
  * **Why**: In the worst case, you might need to traverse almost the entire list to find the target value before which the new node will be inserted. The time complexity is O(n) because the operation scales linearly with the number of nodes in the list.
* **Space Complexity**: O(1)
  * **Why**: Similar to `append`, this operation creates a single new node, so the space complexity is constant, independent of the input list size.

### 3. `insertAfter(targetValue, newValue)`

* **Time Complexity**: O(n)
  * **Why**: You may need to traverse the list to find the target node after which to insert the new node. Like `insertBefore`, this operation's time complexity is linear with the list's length.
* **Space Complexity**: O(1)
  * **Why**: Regardless of the list's size, this operation also only creates one new node, maintaining a constant space complexity.

### 4. `kthFromEnd(k)`

### Time Complexity: O(n)

* **First Pass**: The method traverses the entire linked list to calculate its length, which is O(n), where `n` is the number of nodes in the list.
* **Second Pass**: After calculating the length, the method performs a second traversal to reach the node that is `k` positions from the end. In the worst-case scenario (e.g., when `k` is 0, and looking for the last element), this can also involve traversing nearly the entire list.
* **Overall**: Since both traversals are sequential and not nested, the overall time complexity remains O(n). The constant factor is roughly 2.

### Space Complexity: O(1)

* **Variables**: The space complexity is determined by the extra space needed aside from the input. For this algorithm, only a fixed number of variables are used (`current`, `length`, `target`), regardless of the input size.
* **No Additional Data Structures**: The method does not use any additional data structures that grow with the size of the input. The space required for the variables is constant and does not depend on the size of the linked list.
* **Overall**: The space complexity is O(1), indicating constant space usage.

### 5. `function zipLists(list1, list2)`

* **Time Complexity: O(n)**: The time complexity is O(n), where n is the number of elements in the shorter of the two linked lists. This is because the function iterates through both lists simultaneously until one of them ends. The loop inside the function runs for each pair of elements from the two lists until reaching the end of one of the lists. Hence, the time complexity is linear with respect to the length of the shorter list, as the loop might not iterate through all elements if one list is significantly longer than the other.

* **Space Complexity: O(1)**: The space complexity is O(1), which means it requires constant space regardless of the input size. This is because the function only uses a fixed number of variables (current1, current2, next1, next2) and does not allocate any additional structures or lists that grow with the input size. The zipping is done in-place by adjusting the pointers in the existing nodes of the lists.

### 6. `function reverseLinkedList()`

* **Time Complexity: O(n)**: Each node in the list is visited exactly once. No matter the length of the list, every node's next pointer is reversed, ensuring that the loop runs for each element exactly once. If there are n nodes, the loop performs n iterations, making the time complexity linear, or O(n).

* **Space Complexity: O(1)**: The space required does not grow with the size of the input list. Only three pointers used (previous, current, and next), regardless of the list's length. This constant space requirement, not influenced by the list size, results in a method with a space complexity of O(1).

## Stack - Approach and Efficiency

### push(value)

**Time Complexity: O(1):** This method inserts a new node at the head of the linked list, which is an operation that takes constant time. It doesn't matter how many items are in the stack; inserting at the head is always done in a fixed amount of steps.

**Space Complexity: O(1):** Inserting a new element requires creating a new node, which takes constant space. The method does not allocate any additional space that grows with the size of the input or stack size.

### pop()

**Time Complexity: O(1):** Removing an item from the top of the stack involves just a few operations: accessing the head of the linked list, reassigning the head to the next node, and updating the top property. All these operations are performed in constant time.

**Space Complexity: O(1):** This method does not use any additional space that grows with the size of the input or stack size. The space required for the operations is constant, regardless of the stack's size.

### peek()

**Time Complexity: O(1):** This method returns the value of the top node without modifying the stack. Accessing the top node's value is a constant time operation as it involves a direct reference with no need to traverse the stack.

**Space Complexity: O(1):** Similar to pop(), peek() does not allocate additional space based on the input size or stack size. It only accesses existing data, so the space complexity is constant.

### isEmpty()

**Time Complexity: O(1):** This method checks whether the stack is empty by comparing the top property to null. This is a straightforward, constant time operation since it requires just one step regardless of the stack size.

**Space Complexity: O(1):** Checking if the stack is empty does not require additional space that depends on the stack size. The operation uses a fixed amount of space, making its space complexity constant.

## Queue - Approach and efficiency

### enqueue(value)

**Time Complexity: O(1)**: This method adds a new node to the back of the queue. Thanks to the maintenance of a back pointer, appending a new node does not require traversing the entire queue, making this operation constant time regardless of the queue's size.

**Space Complexity: O(1)**: Creating a new node and updating pointers requires constant space. Although the overall space used by the queue increases with each added element, the space required for the operation itself does not depend on the size of the queue.

### dequeue()

**Time Complexity: O(1)**: Removing an item from the front of the queue is a constant time operation because it involves merely reassigning the front pointer to the next node in the queue and potentially resetting the back pointer if the queue becomes empty.

**Space Complexity: O(1)**: This method does not allocate any additional space that grows with the size of the input or queue size. The operation's space requirement is constant, independent of the queue's size.

### peek() - queue

**Time Complexity: O(1)**: This method returns the value at the front of the queue without modifying the queue. Accessing this value is a constant time operation since it involves directly referencing the front node, with no need to traverse the queue.

**Space Complexity: O(1)**: Similar to dequeue(), peek() does not allocate additional space based on the input size or queue size. It accesses existing data, so the space complexity remains constant.

### isEmpty() - queue

**Time Complexity: O(1)**: Checking if the queue is empty is accomplished by comparing the front property to null. This operation is performed in constant time, as it requires only a single step, irrespective of the queue's size.

**Space Complexity: O(1)**: This method does not require additional space that depends on the queue's size. The operation uses a fixed amount of space, making its space complexity constant.

## PseudoQueue Using Stacks - Approach and efficiency

### enqueue(value) - pseudoQueue

**Time Complexity: O(1):** Adding a new element to the queue via the enqueue method involves pushing the element onto the top of the inboundStack. Since stack push operations take constant time, independent of the stack's size, the time complexity of the enqueue method is O(1).

**Space Complexity: O(1):** The space required for pushing an element onto the stack is constant. Although the overall space used by the queue increases with each added element, the space required for the operation itself is independent of the size of the queue.

### dequeue() - pseudoQueue

**Time Complexity: Amortized O(1), Worst-case O(n)**: The dequeue method involves preparing the outboundStack by transferring elements from the inboundStack if the outboundStack is empty. This preparation step, prepareOutBoundStack, has a worst-case time complexity of O(n) when all elements must be transferred from inboundStack to outboundStack. However, because each element is transferred at most twice (once to inboundStack and once to outboundStack) and then popped once, the amortized time complexity for each element over a series of operations is O(1).

**Space Complexity: O(n):** The space complexity for maintaining the elements in the queue is O(n), where n is the number of elements in the queue. This space is required to hold all elements in the two stacks (inboundStack and outboundStack). The operation itself does not allocate additional space that grows with the size of the input or queue size, but the total space used by the queue is proportional to the number of elements it contains.
