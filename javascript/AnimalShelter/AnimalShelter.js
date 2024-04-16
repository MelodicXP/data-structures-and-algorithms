'use strict';

const { Queue } = require('../linked-list/Queue');

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.creationTime = Date.now();
  }
}

class AnimalShelter {
  constructor () {
    this.dogs = new Queue();
    this.cats = new Queue();
  }
  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogs.enqueue(animal);
    } else if (animal.species === 'cat') {
      this.cats.enqueue(animal);
    } else {
      throw new Error('Animal must be either a dog or a cat');
    }
  }
  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogs.isEmpty() ? null : this.dogs.dequeue();
    } else if (pref === 'cat') {
      return this.cats.isEmpty() ? null : this.cats.dequeue();
    } else {
      if (this.dogs.isEmpty() && this.cats.isEmpty()) {
        return null;
      } else if (!this.dogs.isEmpty() && (this.cats.isEmpty() || this.dogs.peek().creationTime < this.cats.peek().creationTime)) {
        return this.dogs.dequeue();
      } else {
        return this.cats.dequeue();
      }
    }
  }
}

module.exports = {
  Animal,
  AnimalShelter
};
