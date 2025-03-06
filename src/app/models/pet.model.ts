export interface Pet {
  id: number;
  name: string;
  type: 'cat' | 'dog';
  breed: string;
  age: number;
  description: string;
  imageUrl: string;
}