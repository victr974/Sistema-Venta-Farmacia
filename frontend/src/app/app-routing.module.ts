import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';



const routes: Routes = [
 {
  path: '', component : HomeComponent
 },
 {
  path:'product/:id', component: ProductoComponent
 },
 {
  path:'cart', component: CartComponent
 },
 {
  path: 'checkout', component: CheckoutComponent 
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
