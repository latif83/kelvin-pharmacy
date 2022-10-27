import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes : Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'home/search/:medicine', component: HomeComponent},
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
