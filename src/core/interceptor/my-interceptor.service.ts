import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageService } from '../error/message-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService {

  constructor(private messageService :MessageService,private router:Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.getAuthToken();

    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleHttpError(error);
        return throwError(error);
      })
    );
  }

  private handleHttpError(error: HttpErrorResponse): void {
    const {  error: apiError } = error;
    const errorMessage = apiError?.message || 'Ocurrió un error en la API';
    this.messageService.showMessage(errorMessage);

    if(apiError?.code == 'BE001'){
      sessionStorage.setItem('token','')
      this.router.navigate(['login']);
      
    }
  }

  private getAuthToken(): string {
    return sessionStorage.getItem('token') || '';
  }


}
