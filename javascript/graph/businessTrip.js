'use strict';

// const Graph = require('./graph.js');

/**
Write a function called business trip
- Arguments: graph, array of city names
- Return: the cost of the trip (if it’s possible) or null (if not)
- Determine whether the trip is possible with direct flights, and how much it would cost.
 */

let businessTrip = (graph, arrayCityNames) => {
  let totalCost = 0;

  // Iterate through each consecutive pair of cities in the array
  for (let i = 0; i < arrayCityNames.length - 1; i++) {
    let currentCity = arrayCityNames[i];
    let nextCity = arrayCityNames[i + 1];

    // Get neighbors of current city (returned as map with key value pairs)
    let neighbors = graph.getNeighbors(currentCity);

    // Check if direct flight to the next city (return a boolean)
    let directFlight = neighbors.find((neighbor) => {
      return neighbor.vertex === nextCity;
    });

    if (directFlight) {
      // If direct flight is true, accumulate cost
      totalCost += directFlight.weight;
    } else {
      return null;
    }
  }
  // Return total cost if all flights are direct
  return `$${totalCost}`;
};

module.exports = businessTrip;
// Implementation
// let graph = new Graph();
// graph.addVertex('Pandora');
// graph.addVertex('Arendelle');
// graph.addVertex('Metroville');
// graph.addVertex('Narnia');
// graph.addVertex('New Monstropolis');
// graph.addVertex('Naboo');

// graph.addEdge('Pandora', 'Arendelle', 150);
// graph.addEdge('Pandora', 'Metroville', 82);
// graph.addEdge('Arendelle', 'Metroville', 99);
// graph.addEdge('Arendelle', 'New Monstropolis', 42);
// graph.addEdge('Metroville', 'Narnia', 37);
// graph.addEdge('Metroville', 'Naboo', 26);
// graph.addEdge('Metroville', 'New Monstropolis', 105);
// graph.addEdge('Narnia', 'Naboo', 250);
// graph.addEdge('Naboo', 'New Monstropolis', 73);

// // let verticiesArray = graph.getVertices();
// // console.log(`This is verticesArray: ${verticiesArray}`);

// let neighbors = graph.getNeighbors('Metroville');
// console.log(neighbors);

// // Test Cases
// console.log(businessTrip(graph, ['Metroville', 'Pandora'])); // Output: $82
// console.log(businessTrip(graph, ['Arendelle', 'New Monstropolis', 'Naboo'])); // Output: $115
// console.log(businessTrip(graph, ['Naboo', 'Pandora'])); // Output: null
// console.log(businessTrip(graph, ['Narnia', 'Arendelle', 'Naboo'])); // Output: null
