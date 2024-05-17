import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { LoginT } from 'src/types/loginT';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  seePass = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nickname: ['admin', Validators.required],
      password: ['password', Validators.required],
    });
  }

  ngOnInit(): void {}

  Submit(): void {
    const body: LoginT = {
      nickname: this.loginForm.get('nickname')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.authService.login(body).subscribe((response) => {
      if (response) {
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      }
    });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
