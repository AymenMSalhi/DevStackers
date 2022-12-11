import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component';
import { PublicLayoutComponent } from 'src/app/layouts/public-layout/public-layout.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: 'home',
    component: PublicLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
    ]
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }
    ]
  },
  {
    path: 'register',
    component: AuthLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }
    ]
  },
  {
    path: 'reset-password',
    component: AuthLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./auth/reset-password-request/reset-password-request.module').then(m => m.ResetPasswordRequestModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
