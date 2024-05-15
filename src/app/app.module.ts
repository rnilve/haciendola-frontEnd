import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './admin/products/products.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './admin/home/home.component';
import { CoreModule } from '../core/core.module';
import { ProductService } from 'src/service/product.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { MyInterceptorService } from 'src/core/interceptor/my-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [
    {
      provide:ProductService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
