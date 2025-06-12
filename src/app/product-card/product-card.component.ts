import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { FormsModule } from '@angular/forms';
import { StockHighlightDirective } from '../stock-highlight.directive';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule,CartComponent,FormsModule, StockHighlightDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  showcart: boolean = false;
  category: string = 'allproducts';
  searchitem:string = '';
  viewcart() {
    this.showcart = !this.showcart;
  }
  
  @Input() products: {id: number;title: string;price: number;description: string;category:string;brand:string;availabilityStatus:string;stock: number;images:string[];showmore:boolean}[] = [];

  cartproducts:{id: number;title: string;price: number;description: string;category:string;brand:string;availabilityStatus:string;stock: number;images:string[];showmore:boolean}[] = [];

  filteredproducts:{id: number;title: string;price: number;description: string;category:string;brand:string;availabilityStatus:string;stock: number;images:string[];showmore:boolean}[] = [];

  showmoresetting(index:number) {
    this.filteredproducts[index].showmore = !this.filteredproducts[index].showmore;
  }
  onSearch() {
    this.filteredproducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchitem.toLowerCase())
    )
  }
  categorychange() {
    if (this.category === 'allproducts') {
      this.filteredproducts=[]
      this.filteredproducts = this.products.filter((product) => {
        return true
      })
    } else if (this.category === 'instock'){
      this.filteredproducts=[]
      this.filteredproducts = this.products.filter((product) => {
        return product.availabilityStatus === 'In Stock'
      })
    } else if (this.category === 'outofstock') {
      this.filteredproducts=[]
      this.filteredproducts = this.products.filter((product) => {
        return product.availabilityStatus === 'Low Stock'
      })
    }
  }
  ngOnInit() {
    this.categorychange()
  }
  atcbtn(index:number) {
    this.cartproducts.push(this.products[index])
  }
}