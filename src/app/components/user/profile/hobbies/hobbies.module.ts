import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbiesRoutingModule } from './hobbies-routing.module';
import { HobbiesComponent } from './hobbies.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    HobbiesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HobbiesComponent
  ]
})
export class HobbiesModule { }
