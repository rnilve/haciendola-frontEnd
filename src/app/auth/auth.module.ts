import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/core/core.module';
import { RegisterComponent } from './register/register.component';
import { BlankComponent } from './blank/blank.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    BlankComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule ,
    CoreModule
  ]
})
export class AuthModule { }
