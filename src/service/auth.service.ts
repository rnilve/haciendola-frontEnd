import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginT, RespLoginT } from 'src/types/loginT';
import { ApiFetchResponseT } from 'src/types/responseT';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth'; 
  constructor(private http: HttpClient) { }

  login(loginData: LoginT): Observable<RespLoginT> {
    return this.http.post<ApiFetchResponseT>(`${this.apiUrl}/login`, loginData).pipe(
      map(response => {
        return response.data;
      })
    );
  }
}
