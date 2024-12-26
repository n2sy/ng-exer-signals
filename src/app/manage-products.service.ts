import { effect, Injectable, signal } from '@angular/core';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ManageProductsService {
  allProducts = signal<Product[]>([]);

  constructor() {
    this.allProducts.set([
      { id: '1', name: 'product 1', price: 100, selected: false },
      { id: '2', name: 'product 2', price: 200, selected: false },
      { id: '3', name: 'product 3', price: 300, selected: true },
    ]);
    effect(() => {
      console.log('call to Signal:', this.allProducts());
    });
  }

  addProduct(newProduct: Product) {
    newProduct.id = crypto.randomUUID();
    this.allProducts.update((previous) => [...previous, newProduct]);
  }
}
