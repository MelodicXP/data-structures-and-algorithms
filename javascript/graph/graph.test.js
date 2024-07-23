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
});
