# Code Challenge 35 - Graph Implementation

## Graph Implementation - Class 35 & 36

### Implement Graph - Lab 35:

Graph should be represented as an adjacency list, and should include the following methods:

* add vertex
  * Arguments: value
  * Returns: The added vertex
  * Add a vertex to the graph
* add edge
  * Arguments: 2 vertices to be connected by the edge, weight (optional)
  * Returns: nothing
  * Adds a new edge between two vertices in the graph
  * If specified, assign a weight to the edge
  * Both vertices should already be in the Graph
* get vertices
  * Arguments: none
  * Returns all of the vertices in the graph as a collection (set, list, or similar)
  * Empty collection returned if there are no vertices
* get neighbors
  * Arguments: vertex
  * Returns a collection of edges connected to the given vertex
    * Include the weight of the connection in the returned collection
  * Empty collection returned if there are no vertices
* size
  * Arguments: none
  * Returns the total number of vertices in the graph
  * 0 if there are none

### Add breadth first traversal to graph - Lab 36:

Write the following method for the Graph class:

* breadth first
* Arguments: Node
* Return: A collection of nodes in the order they were visited.
* Display the collection

### Whiteboard process Implement Graph

![Graph Lab 35](../assets/codeChallenge35.png);
![Graph Lab 36](../assets/codeChallenge36.png);

### Big O - Graphs

**Time Complexity - O(n) on average:**

* Adding a vertex has a constant time complexity, O(1).
* Adding an edge has a constant time complexity, O(1).
* Getting all vertices has a linear time complexity, O(n).
* Getting the neighbors of a vertex has a constant time complexity, O(1).
* Getting the size of the graph has a constant time complexity, O(1).

**Space Complexity - O(n):**

* Adding a vertex requires constant space, O(1).
* Adding an edge requires constant space, O(1).
* Getting all vertices requires linear space, O(n).
* Getting the neighbors of a vertex requires space proportional to the number of neighbors, O(k).
* Getting the size of the graph requires constant space, O(1).

**Time Complexity - O(V + E):**

* Initializing the queue and marking the start node as visited have a constant time complexity, O(1).
* Enqueuing and dequeuing each vertex result in a time complexity of O(V).
* Iterating through all neighbors and processing each edge results in a time complexity of O(E).
* Overall, the traversal requires O(V + E) time.

**Space Complexity - O(V):**

* The queue for nodes to visit requires O(V) space in the worst case.
* The visited map requires O(V) space to store the visited status of each vertex.
* The result array requires O(V) space to store the traversal order.
* Overall, the space complexity is O(V).
