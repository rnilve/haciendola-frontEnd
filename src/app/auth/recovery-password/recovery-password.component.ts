import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { UserT } from 'src/types/userT';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css'],
})
export class RecoveryPasswordComponent implements OnInit {
  nickNameForm: FormGroup;
  users: UserT = {};
  userDataForm: FormGroup;
  passwordForm: FormGroup;
  currentStep = 1;
  messagePassword = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.nickNameForm = this.fb.group({
      nickname: ['', Validators.required],
    });
    this.userDataForm = this.fb.group({
      securityAnswer: ['', Validators.required],
    });

    this.passwordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  getUser(): void {
    const json = {
      nickname: this.nickNameForm.get('nickname')?.value,
    };
    this.userService.byNickName(json).subscribe((response) => {
      if (response) {
        this.users = response;
        if (this.currentStep === 1 && this.nickNameForm.valid) {
          this.currentStep = 2;
        }
      }
    });
  }

  compareQuestion(): void {
    const json = {
      question: this.userDataForm.get('securityAnswer')?.value,
      id_user: this.users.id,
    };
    this.userService.compareQuestion(json).subscribe((response) => {
      if (response) {
        if (this.currentStep === 2 && this.userDataForm.valid) {
          this.currentStep = 3;
        }
      }
    });
  }

  onSubmit() {
    if (
      this.passwordForm.get('confirmPassword')?.value !=
      this.passwordForm.get('newPassword')?.value
    ) {
      this.messagePassword = 'Las contraseñas no son iguales';
      return;
    }
    this.messagePassword = '';
    const body: UserT = {
      id: this.users.id,
      password: this.passwordForm.get('confirmPassword')?.value,
    };
    this.userService.recoveryPassword(body).subscribe((response) => {
      if (response) {
        this.router.navigate(['/login']);
      }
    });
  }
}
