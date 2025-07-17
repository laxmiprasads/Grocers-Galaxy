import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() cartproducts: Product[] =[];
  expandedId: number | null = null;
    toggleDescription(id: number) {
      this.expandedId = this.expandedId === id ? null : id;
    }
removeFromCart(id: number) {
  this.cartproducts = this.cartproducts.filter(product => product.id !== id);
}
}