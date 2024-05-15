import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiFetchResponseT } from 'src/types/responseT';
import { Observable, map } from 'rxjs';
import { ProductT } from 'src/types/productT';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl + '/products'; 

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductT[]> {
    return this.http.get<ApiFetchResponseT>(this.apiUrl).pipe(
      map((response:any) => response.data as ProductT[])
    );
  }

  getProductsById(id:number): Observable<ProductT> {
    return this.http.get<ApiFetchResponseT>(`${this.apiUrl}/${id}`).pipe(
      map((response:any) => response.data as ProductT)
    );
  }

  createProduct(data: ProductT): Observable<ProductT> {
    return this.http.post<ApiFetchResponseT>(`${this.apiUrl}`, data).pipe(
      map(response => {
        return response.data;
      })
    );
  }

  updateProduct(data: ProductT,id:number): Observable<ProductT> {
    return this.http.put<ApiFetchResponseT>(`${this.apiUrl}/${id}}`, data).pipe(
      map(response => {
        return response.data;
      })
    );
  }
}
