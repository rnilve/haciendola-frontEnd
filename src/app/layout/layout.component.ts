import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { UserT } from 'src/types/userT';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
user:UserT ={};
  constructor(private authService: AuthService,private router: Router,) { }

  ngOnInit(): void {
    this.getProfile()
  }

  navigateIndex(){
    this.router.navigate(['home']);
  }

  navigateProduct(){
    this.router.navigate(['products']);
  }

  getProfile(){
    const json={
      token:sessionStorage.getItem('token')
    }
    this.authService.profile(json).subscribe(response=>{
      this.user=response;
    })
  }

  logout(){
    sessionStorage.setItem('token','')
    this.router.navigate(['login']);
  }
  

}
