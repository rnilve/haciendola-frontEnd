import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductsFormComponent } from './products-form/products-form.component';

const routes: Routes = [

{
path: 'products', component: ProductsComponent ,
},
{
  path: 'home', component: HomeComponent ,
  },
  {
    path: 'products/new', component: ProductsFormComponent ,
    },
    {
      path: 'products/:id', component: ProductsFormComponent ,
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
