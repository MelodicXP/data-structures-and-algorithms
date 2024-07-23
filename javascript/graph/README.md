# Code Challenge 35 - Graph Implementation

## Graph Implementation - Class 35

### Implement Graph:

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

### Whiteboard process Implement Graph

![Most Common Word](../assets/codeChallenge35.png);

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
