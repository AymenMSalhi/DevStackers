import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRequestRoutingModule } from './reset-password-request-routing.module';
import { ResetPasswordRequestComponent } from './reset-password-request.component';


@NgModule({
  declarations: [
    ResetPasswordRequestComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRequestRoutingModule
  ]
})
export class ResetPasswordRequestModule { }
