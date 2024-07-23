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
}

module.exports = Graph ;

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
