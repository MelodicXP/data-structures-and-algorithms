'use strict';

class Graph {
  constructor() {
    // Initialize an empty map to store the adjacency list
    this.adjacencyList = new Map();
  }

  // Method to add a vertex to the graph
  addVertex(value) {
    if (!this.adjacencyList.has(value)) {
      this.adjacencyList.set(value, []);
    }
    return value;
  }

  // Method to add an edge between two vertices
  addEdge(vertex1, vertex2, weight = 0) {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      throw new Error('Both vertices must be added to the graph before adding an edge.');
    }
    this.adjacencyList.get(vertex1).push({ vertex: vertex2, weight });
    this.adjacencyList.get(vertex2).push({ vertex: vertex1, weight });
  }

  // Method to get all vertices in the graph
  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  // Method to get the neighbors of a vertex
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return [];
    }
    return this.adjacencyList.get(vertex);
  }

  // Method to get the total number of vertices in the graph
  size() {
    return this.adjacencyList.size;
  }

  // Method to breadth first traverse graph (uses a queue)
  breadthFirstTraverseGraph(startNode) {
    // Queue to keep track of nodes to visit
    let queueOfNodesToVisit = [];
    // Map to keep track of visited nodes
    let visitedNodes = new Map();
    // Collection to store the order of nodes visited
    let result = [];

    // Add start node to queue
    queueOfNodesToVisit.push(startNode);
    // Mark start node as visited
    visitedNodes.set(startNode, true);

    // Traverse while there are nodes in the queue
    while (queueOfNodesToVisit.length > 0) {
      // Dequeue next node to visit
      let currentNode = queueOfNodesToVisit.shift();

      // Process current node
      console.log(currentNode);
      result.push(currentNode);

      // Get neighbors of current node
      let neighbors = this.getNeighbors(currentNode);

      // Iterate through each neighbor
      for (let neighbor of neighbors) {
        // If the neighbor has not been visited
        if (!visitedNodes.has(neighbor.vertex)) {
          // Mark it as visited
          visitedNodes.set(neighbor.vertex, true);
          // Enqueue the neighbor for future traversal
          queueOfNodesToVisit.push(neighbor.vertex);
        }
      }
    }
    // Return the collection of nodes in the order they were visited
    return result;
  }

  // Method to depth first traverse graph (uses a stack)
  depthFirstTraverseGraph(startNode) {
    // Stack to keep track of nodes to visit
    let stackOfNodesToVisit = [];
    // Map to keep track of visited nodes
    let visitedNodes = new Map();
    // Collection to store the order of nodes visited
    let result = [];

    // Add start node to stack
    stackOfNodesToVisit.push(startNode);

    // Traverse while there are nodes in the stack
    while (stackOfNodesToVisit.length > 0) {
      // Pop the next node to visit (LIFO behavior for DFS)
      let currentNode = stackOfNodesToVisit.pop();

      // Process current node only if it hasn't been visited
      if (!visitedNodes.has(currentNode)) {
        console.log(currentNode);
        result.push(currentNode);

        // Mark current node as visited
        visitedNodes.set(currentNode, true);

        // Get neighbors of current node
        let neighbors = this.getNeighbors(currentNode);

        // Iterate through each neighbor and add to the stack
        // Push them in reverse order if you want to follow a specific left-to-right or right-to-left order
        for (let neighbor of neighbors) {
          if (!visitedNodes.has(neighbor.vertex)) {
            stackOfNodesToVisit.push(neighbor.vertex);
          }
        }
      }
    }

    // Return the collection of nodes in the order they were visited
    return result;
  }
}

module.exports = Graph;

// Example usage and testing
// const graph = new Graph();

// Add vertices
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');

// // Add edges
// graph.addEdge('A', 'B', 5);
// graph.addEdge('A', 'C', 10);
// graph.addEdge('B', 'C', 15);

// console.log('Vertices:', graph.getVertices()); // Should print: ['A', 'B', 'C']
// console.log('Neighbors of A:', graph.getNeighbors('A')); // Should print: [{ vertex: 'B', weight: 5 }, { vertex: 'C', weight: 10 }]
// console.log('Neighbors of B:', graph.getNeighbors('B')); // Should print: [{ vertex: 'A', weight: 5 }, { vertex: 'C', weight: 15 }]
// console.log('Size of graph:', graph.size()); // Should print: 3
