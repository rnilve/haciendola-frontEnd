import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiFetchResponseT } from 'src/types/responseT';
import { UserT } from 'src/types/userT';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl + '/users'; 

  constructor (private http: HttpClient) { }

  createUser(data: UserT): Observable<UserT> {
    return this.http.post<ApiFetchResponseT>(`${this.apiUrl}`, data).pipe(
      map(response => {
        return response.data;
      })
    );
  }

  byNickName(data: any): Observable<UserT> {
    return this.http.post<ApiFetchResponseT>(`${this.apiUrl}/nickname`, data).pipe(
      map(response => {
        return response.data;
      })
    );
  }

  compareQuestion(data: any): Observable<UserT> {
    return this.http.post<ApiFetchResponseT>(`${this.apiUrl}/compare-question`, data).pipe(
      map(response => {
        return response.data;
      })
    );
  }

  recoveryPassword(data: UserT): Observable<UserT> {
    return this.http.post<ApiFetchResponseT>(`${this.apiUrl}/update-password`, data).pipe(
      map(response => {
        return response.data;
      })
    );
  }
}
