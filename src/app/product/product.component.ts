import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-product',
  imports: [ProductCardComponent,CommonModule,HttpClientModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true
})
export class ProductComponent {
  userdetails: string ='';
  constructor(private productService: ProductService,private router:Router) { }
  isPopupVisible = false;
  username: string | null = null;
  role!: string;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.username = localStorage.getItem('username')
        this.role = localStorage.getItem('role') || '';
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    })        
  }
  gotologin(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  gotoaddproduct(){
    this.router.navigate(['addproduct']);
  }
  gotohome(){
    this.router.navigate(['products']);
  }
  products: Product[]= [];
}
