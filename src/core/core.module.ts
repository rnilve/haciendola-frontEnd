import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';



@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastComponent // Exporta el componente para que otros módulos puedan usarlo
  ]
})
export class CoreModule { }
