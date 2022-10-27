import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CheckoutComponent } from '../checkout/checkout.component';

const routes : Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'home/search/:medicine', component: HomeComponent},
  {path : 'checkout/:id', component : CheckoutComponent},
  {path : '**', component: HomeComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
  })
  ]
})
export class AppRoutingModule { }
