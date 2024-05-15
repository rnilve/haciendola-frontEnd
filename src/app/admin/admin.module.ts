import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/core/core.module';


@NgModule({
  declarations: [
    ProductsComponent,
    LayoutComponent,
    HomeComponent,
  ],
  imports: [
    AdminRoutingModule,
    ReactiveFormsModule ,
    CommonModule,
    CoreModule
  ]
})
export class AdminModule { }
