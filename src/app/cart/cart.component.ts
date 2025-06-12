import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() cartproducts:{id: number;title: string;price: number;description: string;category:string;brand:string;availabilityStatus:string;stock: number;images:string[];showmore:boolean}[] = [];
}