import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManageProductsService } from '../manage-products.service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  productSer = inject(ManageProductsService);
}
