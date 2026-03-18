import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
   products: Product[] = [
    { id: 1111, name: 'Laptop', price: 500, used: false },
    { id: 2222, name: 'iPhone', price: 800, used: true },
    { id: 3333, name: 'Headphones', price: 100, used: false },
    { id: 4444, name: 'Camera', price: 300, used: true }
  ];

}
