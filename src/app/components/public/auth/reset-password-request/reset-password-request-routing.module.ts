import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordRequestComponent } from './reset-password-request.component';

const routes: Routes = [{ path: '', component: ResetPasswordRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRequestRoutingModule { }
