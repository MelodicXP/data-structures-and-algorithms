'use strict';

const { Animal, AnimalShelter } = require('../../AnimalShelter/AnimalShelter');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('AnimalShelter functionality', () => {
  it('Can successfully enqueue a dog into the shelter', () => {
    const shelter = new AnimalShelter();
    const dog = new Animal('Fido', 'dog');
    shelter.enqueue(dog);
    expect(shelter.dogs.peek()).toBe(dog);
  });

  it('Can successfully enqueue a cat into the shelter', () => {
    const shelter = new AnimalShelter();
    const cat = new Animal('Whiskers', 'cat');
    shelter.enqueue(cat);
    expect(shelter.cats.peek()).toBe(cat);
  });

  it('Can successfully dequeue a dog from the shelter', () => {
    const shelter = new AnimalShelter();
    const dog = new Animal('Fido', 'dog');
    shelter.enqueue(dog);
    expect(shelter.dequeue('dog')).toBe(dog);
    expect(() => shelter.dogs.peek()).toThrow('Queue is empty');
  });

  it('Can successfully dequeue a cat from the shelter', () => {
    const shelter = new AnimalShelter();
    const cat = new Animal('Whiskers', 'cat');
    shelter.enqueue(cat);
    expect(shelter.dequeue('cat')).toBe(cat);
    expect(() => shelter.cats.peek()).toThrow('Queue is empty');
  });

  it('Dequeue returns null when preferred type is not available', () => {
    const shelter = new AnimalShelter();
    expect(shelter.dequeue('dog')).toBeNull();
    expect(shelter.dequeue('cat')).toBeNull();
  });

  it('Throws an error when trying to enqueue an unsupported animal', () => {
    const shelter = new AnimalShelter();
    const rabbit = new Animal('Bugs', 'rabbit');
    expect(() => shelter.enqueue(rabbit)).toThrow('Animal must be either a dog or a cat');
  });

  it('Dequeue returns the longest waiting animal when no preference given', async () => {
    const shelter = new AnimalShelter();
    const dog = new Animal('Fido', 'dog');
    // Await a delay to ensure different creation times
    await delay(10);  // Delay for 10 milliseconds
    const cat = new Animal('Whiskers', 'cat');

    shelter.enqueue(dog);
    shelter.enqueue(cat);

    console.log(`Dog created at: ${dog.creationTime}`);
    console.log(`Cat created at: ${cat.creationTime}`);

    const dequeuedAnimal = shelter.dequeue();
    expect(dequeuedAnimal).toEqual(dog); // Using toEqual for value comparison
    expect(dequeuedAnimal.name).toBe('Fido');
    expect(dequeuedAnimal.species).toBe('dog');
  });

  it('Successfully handles dequeueing from an empty shelter', () => {
    const shelter = new AnimalShelter();
    expect(shelter.dequeue('dog')).toBeNull();
    expect(shelter.dequeue('cat')).toBeNull();
    expect(shelter.dequeue()).toBeNull();
  });
});

