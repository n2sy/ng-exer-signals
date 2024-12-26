import { Component, inject } from '@angular/core';
import { ManageProductsService } from '../manage-products.service';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-list-products',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  productService = inject(ManageProductsService);
}
