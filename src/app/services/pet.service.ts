import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [
    {
      id: 1,
      name: 'Luna',
      type: 'cat',
      breed: 'Persian',
      age: 3,
      description: 'Luna is a gentle Persian cat with beautiful long fur. She loves to lounge in sunny spots and play with string toys.',
      imageUrl: 'https://placecats.com/poppy/300/200?fit=contain&position=top'
    },
    {
      id: 2,
      name: 'Max',
      type: 'dog',
      breed: 'Golden Retriever',
      age: 2,
      description: 'Max is an energetic British Retriever who loves to play fetch and swim. He\'s great with children and other pets.',
      imageUrl: 'https://placedog.net/800/640?id=17'
    },
    {
      id: 3,
      name: 'Bella',
      type: 'cat',
      breed: 'Siamese',
      age: 4,
      description: 'Bella is a vocal Siamese cat who loves attention. She\'s very intelligent and can learn tricks quickly.',
      imageUrl: 'https://placecats.com/neo/300/200?fit=contain'
    },
    {
      id: 4,
      name: 'Rocky',
      type: 'dog',
      breed: 'Retriever Mix',
      age: 5,
      description: 'Rocky is a loyal mixed breed pupper with excellent training. He\'s protective and great at following commands.',
      imageUrl: 'https://placedog.net/800/640?id=36'
    }
  ];

  getPets(): Pet[] {
    return this.pets;
  }

  getPetById(id: number): Pet | undefined {
    return this.pets.find(pet => pet.id === id);
  }
}