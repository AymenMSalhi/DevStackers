import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechsComponent } from './techs.component';

const routes: Routes = [{ path: '', component: TechsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechsRoutingModule { }
