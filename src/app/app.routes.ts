import { Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import {LoginComponent} from '../components/login/login.component';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'products',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'addproduct',component:AddProductComponent},
  {path:'signup',component:LoginComponent}
];
