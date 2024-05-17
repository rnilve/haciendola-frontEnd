import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from 'src/core/guard/auth.guard';
import { BlankComponent } from './auth/blank/blank.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
},
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: BlankComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
