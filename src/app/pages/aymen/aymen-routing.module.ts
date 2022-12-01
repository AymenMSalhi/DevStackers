import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AymenComponent } from './aymen.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./intro/intro.module').then(m => m.IntroModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AymenRoutingModule { }
