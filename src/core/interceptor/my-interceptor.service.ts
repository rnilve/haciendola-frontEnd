import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageService } from '../error/message-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService {

  constructor(private messageService :MessageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleHttpError(error);
        return throwError(error);
      })
    );
  }

  private handleHttpError(error: HttpErrorResponse): void {
    const { status, error: apiError } = error;
    const errorMessage = apiError?.message || 'Ocurrió un error en la API';
    this.messageService.showMessage(errorMessage);
  }


}
