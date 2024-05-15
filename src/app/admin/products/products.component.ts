import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';
import { ProductT } from 'src/types/productT';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

productsList:ProductT[]=[];


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
     this.getProductsAll();
    // this.getProduct();
  }

  async getProductsAll(){
    await this.productService.getProducts().subscribe(products=>{
      console.log(products)
      this.productsList= products;
    })
  }

  async getProduct(){
    await this.productService.getProductsById(50000).subscribe(products=>{
      console.log(products)
    })
  }


}
