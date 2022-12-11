import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/public/public.module').then(m => m.PublicModule)
  },
  { path: 'design', loadChildren: () => import('./design/design.module').then(m => m.DesignModule) },
  {
    path: 'lf',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
