import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{ MenuComponent } from './menu/menu.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path:'Menu',
    component: MenuComponent
  },
  {
    path: 'Home',
    component:HomeComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
