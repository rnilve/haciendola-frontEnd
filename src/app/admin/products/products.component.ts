import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/service/product.service';
import { PaginationT, ProductT } from 'src/types/productT';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsList: ProductT[] = [];
  size = 5;
  page = 1;
  totalProducts = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductAll(this.page);
  }

  getProductAll(page: number) {
    this.productService
      .AllProductPagination(page, this.size)
      .subscribe((data) => {
        this.productsList = data.products;
        this.size = data.pagination.pageSize;
        (this.totalProducts = data.pagination.totalCount),
          (this.page = data.pagination.currentPage);
      });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((product) => {
      if (product) {
        this.getProductAll(this.page);
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalProducts / this.size);
  }

  onPageChange(page: number): void {
    const newPage = this.page + page;
    if (newPage > 0 && newPage <= this.totalPages) {
      this.getProductAll(newPage);
    }
  }
}
