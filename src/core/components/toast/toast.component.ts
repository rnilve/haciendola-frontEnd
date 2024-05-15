import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/core/error/message-service.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  messageShow: string = '';
  showToast:boolean=false

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.message$.subscribe(message => {
      console.log('ads',message)
      this.showToast = true
      this.showMessage(message)
    });

  }

  showMessage(message: string) {
    this.messageShow = message;
    this.showToast = true;

    setTimeout(() => {
      this.hideMessage();
    }, 5000);
  }

  hideMessage() {
    this.showToast = false;
    this.messageShow = ''; 
  }
}
