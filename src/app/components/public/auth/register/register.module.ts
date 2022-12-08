import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { CodeInputModule } from 'angular-code-input';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,

    CodeInputModule.forRoot({
      isCharsCode: false,
    }),
  ]
})
export class RegisterModule { }
