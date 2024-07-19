'use strict';

// NOTES:
// Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
// LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
// If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
let leftJoin = (hashmap1, hashmap2) => {
  let results = [];
  const keys = hashmap1.keys();

  for (const key of keys) {
    const synonym = hashmap1.get(key);
    const antonym = hashmap2.get(key) || null;
    results.push([key, synonym, antonym]);
  }

  return results;
};

module.exports = { leftJoin };
