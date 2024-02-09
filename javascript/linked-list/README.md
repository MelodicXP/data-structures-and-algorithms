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

## Whiteboard process

![array reverse whiteboard](../assets/linked-lists-whiteboard.png)

## Approach and Efficiency

The approach taken was similar to instruction which was defining problem domain, writing test first, coding to run the tests on, and refactoring if necessary.

**The Big O is:**

* time: O(1)
