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

    return this.http.get<ApiFetchResponseT>(`${this.apiUrl}/${'xx'}`).pipe(
      map((response:any) => response.data as ProductT)
    );
  }
}
