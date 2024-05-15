import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  showMessage(message: string) {
    console.log("🚀 ~ MessageService ~ showMessage ~ message:", message)
    
    this.messageSource.next(message);
  }
}