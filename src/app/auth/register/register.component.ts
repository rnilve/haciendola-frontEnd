import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/service/product.service';
import { UserService } from 'src/service/user.service';
import { UserT } from 'src/types/userT';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  seePass = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      nickname: ['', Validators.required],
      ci: ['', Validators.required],
      phone: [''],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      security_question: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  Submit(): void {
    const body: UserT = {
      name: this.registerForm.get('name')?.value,
      last_name: this.registerForm.get('last_name')?.value,
      ci: this.registerForm.get('ci')?.value,
      phone: this.registerForm.get('phone')?.value,
      nickname: this.registerForm.get('nickname')?.value,
      password: this.registerForm.get('password')?.value,
      address: this.registerForm.get('address')?.value,
      security_question: this.registerForm.get('security_question')?.value,
      email: this.registerForm.get('email')?.value,
    };
    this.userService.createUser(body).subscribe((response) => {
      if (response) {
        this.router.navigate(['/login']);
      }
    });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
