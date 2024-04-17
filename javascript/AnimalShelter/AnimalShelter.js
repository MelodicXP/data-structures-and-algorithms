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
    if(this.isDog(animal)) {
      this.dogs.enqueue(animal);
    } else if (this.isCat(animal)) {
      this.cats.enqueue(animal);
    } else {
      throw new Error('Animal must be either a dog or a cat');
    }
  }
  dequeue(pref) {
    if (pref === 'dog') {
      return this.dequeueDog();
    } else if (pref === 'cat') {
      return this.dequeueCat();
    } else {
      return this.dequeueAny();
    }
  }

  isDog(animal) {
    return animal.species === 'dog';
  }

  isCat(animal) {
    return animal.species === 'cat';
  }

  dequeueDog() {
    return this.dogs.isEmpty() ? null : this.dogs.dequeue();
  }

  dequeueCat() {
    return this.cats.isEmpty() ? null : this.cats.dequeue();
  }

  dequeueAny() {
    if (this.dogs.isEmpty() && this.cats.isEmpty()) {
      return null;
    } else if (!this.dogs.isEmpty() && (this.cats.isEmpty() || this.dogs.peek().creationTime < this.cats.peek().creationTime)) {
      return this.dogs.dequeue();
    } else {
      return this.cats.dequeue();
    }
  }
}

module.exports = {
  Animal,
  AnimalShelter
};
