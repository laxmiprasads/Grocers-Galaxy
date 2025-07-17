import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {LoginComponent} from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'products',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'addproduct',component:AddProductComponent}
];
