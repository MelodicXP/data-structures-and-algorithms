'use strict';

const Graph = require('./graph.js');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('Vertex can be successfully added to the graph', () => {
    expect(graph.addVertex('A')).toBe('A');
    expect(graph.getVertices()).toContain('A');
  });

  test('An edge can be successfully added to the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B', 5);
    expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 5 }]);
    expect(graph.getNeighbors('B')).toEqual([{ vertex: 'A', weight: 5 }]);
  });

  test('A collection of all vertices can be properly retrieved from the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    expect(graph.getVertices()).toEqual(['A', 'B', 'C']);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B', 5);
    expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 5 }]);
  });

  test('Neighbors are returned with the weight between vertices included', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B', 5);
    expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 5 }]);
  });

  test('The proper size is returned, representing the number of vertices in the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    expect(graph.size()).toBe(3);
  });

  test('A graph with only one vertex and edge can be properly returned', () => {
    graph.addVertex('A');
    expect(graph.getVertices()).toEqual(['A']);
    expect(graph.size()).toBe(1);
  });

  test('Adding an edge between non-existent vertices should throw an error', () => {
    expect(() => graph.addEdge('A', 'B')).toThrow('Both vertices must be added to the graph before adding an edge.');
  });

  test('Breadth-first traversal returns nodes in the correct order', () => {
    // Setup graph
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addEdge('A', 'B'); // A - B
    graph.addEdge('A', 'C'); // A - C
    graph.addEdge('B', 'D'); // B - D
    graph.addEdge('C', 'E'); // C - E

    // Perform BFS starting from 'A'
    const traversalOrder = graph.breadthFirstTraverseGraph('A');

    // Verify the traversal order matches BFS expectations
    expect(traversalOrder).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  test('Depth-first traversal returns nodes in the correct order', () => {
    // Setup graph
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addVertex('H');

    graph.addEdge('A', 'B'); // A - B
    graph.addEdge('A', 'D'); // A - D
    graph.addEdge('B', 'D'); // B - D
    graph.addEdge('B', 'C'); // B - C
    graph.addEdge('C', 'G'); // C - G
    graph.addEdge('D', 'F'); // D - F
    graph.addEdge('D', 'H'); // D - H
    graph.addEdge('D', 'E'); // D - E
    graph.addEdge('F', 'H'); // F - H

    // Perform BFS starting from 'A'
    const traversalOrder = graph.depthFirstTraverseGraph('A');

    // Verify the traversal order matches BFS expectations
    expect(traversalOrder).toEqual(['A', 'D', 'E', 'H', 'F', 'B', 'C', 'G']); // Adjusted expected order
  });

});
