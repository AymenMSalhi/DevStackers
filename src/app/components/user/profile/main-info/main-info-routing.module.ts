import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInfoComponent } from './main-info.component';

const routes: Routes = [{ path: '', component: MainInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainInfoRoutingModule { }