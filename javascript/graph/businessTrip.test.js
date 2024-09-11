'use strict';

const Graph = require('./graph');
const businessTrip = require('./businessTrip');

describe('Business Trip', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test ('Direct Flights are possible', () => {
    // Add nodes/vertices
    graph.addVertex('Pandora');
    graph.addVertex('Arendelle');
    graph.addVertex('Metroville');
    graph.addVertex('Narnia');
    graph.addVertex('New Monstropolis');
    graph.addVertex('Naboo');

    // Add edges between the nodes/vertices
    graph.addEdge('Pandora', 'Arendelle', 150);
    graph.addEdge('Pandora', 'Metroville', 82);
    graph.addEdge('Arendelle', 'Metroville', 99);
    graph.addEdge('Arendelle', 'New Monstropolis', 42);
    graph.addEdge('Metroville', 'Narnia', 37);
    graph.addEdge('Metroville', 'Naboo', 26);
    graph.addEdge('Metroville', 'New Monstropolis', 105);
    graph.addEdge('Narnia', 'Naboo', 250);
    graph.addEdge('Naboo', 'New Monstropolis', 73);

    expect(businessTrip(graph, ['Metroville', 'Pandora'])).toBe('$82');
    expect(businessTrip(graph, ['Arendelle', 'New Monstropolis', 'Naboo'])).toBe('$115');
    expect(businessTrip(graph, ['Naboo', 'Pandora'])).toBe(null);
    expect(businessTrip(graph, ['Narnia', 'Arendelle', 'Naboo'])).toBe(null);
  });
});







