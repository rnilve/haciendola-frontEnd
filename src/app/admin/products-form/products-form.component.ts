import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/service/product.service';
import { ProductT } from 'src/types/productT';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  productForm: FormGroup;
  productId: number = 0;

  constructor(  private fb: FormBuilder,private productService:ProductService, private route: ActivatedRoute,private router:Router) { 
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      handle: ['', Validators.required],
      description: ['', Validators.required],
      sku: ['', Validators.required],
      grams: [0, Validators.required],
      stock: [0, Validators.required],
      price: [0, Validators.required],
      compare_price: [0, Validators.required],
      barcode: ['', Validators.required]
  })
}

  ngOnInit(): void {
   this.getProduct();
  }


  async getProduct(){
    this.route.params.subscribe((params) => {
      this.productId = +params['id']; 
    })

    if(this.productId){
      await this.productService.getProductsById(this.productId).subscribe(product=>{
        this.productForm.patchValue({
          title: product.title,
          handle: product.handle,
          description: product.description,
          sku: product.sku,
          grams: product.grams,
          stock: product.stock,
          price: product.price,
          compare_price: product.compare_price,
          barcode: product.barcode
        });
      })
    }
  }


  onSubmit() {
    if (this.productForm.valid) {

      const body: ProductT = {
        
        title: this.productForm.get('title')?.value,
        handle: this.productForm.get('handle')?.value,
        description:this.productForm.get('description')?.value,
        sku:this.productForm.get('description')?.value,
        grams:this.productForm.get('grams')?.value,
        stock:this.productForm.get('stock')?.value,
        price:this.productForm.get('price')?.value,
        compare_price:this.productForm.get('compare_price')?.value,
        barcode:this.productForm.get('barcode')?.value,
      };
      if(!this.productId){
        this.productService.createProduct(body).subscribe(response =>{
          if(response.id){
            this.router.navigate(['/products']);
          }
     
        })
      }else{
        body.id=this.productId;
        this.productService.updateProduct(body,this.productId).subscribe(response =>{
          if(response.id){
            this.router.navigate(['/products']);
          }
     
        })
      }
    }
  }

}
